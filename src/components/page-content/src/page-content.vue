<template>
  <div class="page-content">
    <jj-table
      :tableData="dataList"
      :tableDataCount="dataCount"
      v-bind="contentTableConfig"
      v-model:pagination="paginationInfo"
      @selectionChange="handleSelectionChange"
    >
      <!-- 一、插槽名称（headerHandler、status、createAt、updateAt、operation）在这里是写死的，这些插槽适用于比较公共的内容 -->
      <!-- 1. header 中的插槽 -->
      <!-- <template #headerHandler>
        <el-button v-if="canCreate" type="primary">新建用户</el-button>
        <el-button>
          <el-icon><refresh /></el-icon>
        </el-button>
      </template> -->
      <template #headerHandler>
        <template
          v-for="item in contentTableConfig.headerHandlers"
          :key="item.slotName"
        >
          <template
            v-if="
              !item.permission ||
              headHandlerPermission[
                `can${$filters.capitalize(item.permission)}`
              ]
            "
          >
            <slot :name="item.slotName"></slot>
          </template>
        </template>
      </template>

      <!-- 2. 列表（el-table）中的插槽 -->
      <template #createAt="scope">
        <span>{{ $filters.formatUTCTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatUTCTime(scope.row.updateAt) }}</span>
      </template>
      <!-- 操作列不需要拿到当前行的数据，所以不需要向上面那样使用作用域插槽，只需要使用具名插槽即可 -->
      <template #operation="scope">
        <div class="operation-btns">
          <el-button v-if="canUpdate" type="text">
            <el-icon><edit /></el-icon>
            <span>编辑</span>
          </el-button>
          <el-popconfirm
            title="删除后不可恢复，确定删除吗？"
            @confirm="handleDeleteClick(scope.row.id)"
            @cancel="handleDeleteCancel"
          >
            <template #reference>
              <el-button v-if="canDelete" type="text" class="operation-del-btn">
                <el-icon><delete /></el-icon>
                <span>删除</span>
              </el-button>
            </template>
          </el-popconfirm>
        </div>
      </template>

      <!-- <template #header>哈哈哈</template> -->

      <!-- <template v-slot:image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
          preview-teleported
        />
      </template> -->

      <!-- 二、动态的插槽，使用的插槽名称由父组件传入，这种插槽适用于父组件特有的内容 -->
      <template
        v-for="dynamicSlotName in dynamicSlotNames"
        :key="dynamicSlotName"
        #[dynamicSlotName]="scope"
      >
        <!-- 下面的 notDynamicSlotNames 中已经过滤过了，所以这里的判断可以不加了 -->
        <!-- <template v-if="dynamicSlotName"> -->
        <slot :name="dynamicSlotName" :row="scope.row"></slot>
        <!-- </template> -->
      </template>
    </jj-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useStore } from '@/store'
import JjTable from '@/base-ui/table'
import { usePermission } from '@/hooks/usePermission'

export default defineComponent({
  props: {
    contentTableConfig: {
      type: Object,
      required: true
    },
    parentName: {
      type: String,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  components: {
    JjTable
  },
  setup(props) {
    // 0. 获取操作权限
    const canCreate = usePermission(props.pageName, 'create')
    const canDelete = usePermission(props.pageName, 'delete')
    const canUpdate = usePermission(props.pageName, 'update')
    const canQuery = usePermission(props.pageName, 'query')
    const headHandlerPermission: any = {
      canCreate,
      // 测试数据
      canAudit: true
    }

    const prevQueryInfo = ref()

    // 1. 双向绑定 paginationInfo
    const paginationInfo = ref({ currentPage: 1, pageSize: 5 })
    // 一旦监听到 paginationInfo 数据发生变化（table.vue 中我们监听了 pagination 的 currentPage 和 pageSize 的变化，然后向外发出了事件），就重新调用 getPageData() 发送网络请求
    watch(paginationInfo, () => getPageData({ ...prevQueryInfo.value }))

    const store = useStore()
    // 2. 发送网络请求
    const getPageData = (
      queryInfo: any = {},
      isResetPaginationInfo = false
    ) => {
      // 没有查询权限时直接跳出函数，不再发送网络请求
      if (!canQuery) return

      if (isResetPaginationInfo) {
        paginationInfo.value.currentPage = 1
        paginationInfo.value.pageSize = 5
      }

      prevQueryInfo.value = { ...queryInfo }

      store.dispatch(`${props.parentName}/getPageListAction`, {
        pageName: props.pageName,
        queryInfo: {
          offset:
            (paginationInfo.value.currentPage - 1) *
            paginationInfo.value.pageSize,
          size: paginationInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    // 刚开始就调用一次
    getPageData()

    // 3. 从 Vuex 中获取数据
    // 使用 computed 的目的是当数据发生改变时，可以自动重新获取到
    const dataList = computed(() =>
      // 调用指定模块中的 pageListData 这个 getter 返回的函数
      store.getters[`${props.parentName}/pageListData`](props.pageName)
    )
    const dataCount = computed(() =>
      store.getters[`${props.parentName}/pageListDataCount`](props.pageName)
    )

    const notDynamicSlotNames = [
      undefined,
      '',
      'createAt',
      'updateAt',
      'operation'
    ]
    // 4. 获取其它的动态插槽名称
    const dynamicSlotNames = props.contentTableConfig.attributesList
      .map((attributes: any) => attributes.slotName)
      .filter((slotName: string | undefined) => {
        // if (slotName === undefined) return false
        // if (slotName === 'status') return false
        // if (slotName === 'createAt') return false
        // if (slotName === 'updateAt') return false
        // if (slotName === 'operation') return false
        if (notDynamicSlotNames.includes(slotName)) return false
        return true
      })
    console.log(
      '🚀 ~ file: page-content.vue ~ line 145 ~ setup ~ dynamicSlotNames',
      dynamicSlotNames
    )

    // 5. 删除、编辑、新建操作
    const handleDeleteClick = (id: number) => {
      console.log(
        '🚀 ~ file: page-content.vue ~ line 197 ~ handleDeleteClick ~ id',
        id
      )
      store.dispatch('system/deletePageDataItemAction', {
        pageName: props.pageName,
        id
      })
    }
    const handleDeleteCancel = () => {
      console.log('取消')
    }

    const handleSelectionChange = (selection: any) => {
      console.log(
        '🚀 ~ file: user.vue ~ line 84 ~ handleSelectionChange ~ selection',
        selection
      )
    }

    return {
      dataList,
      dataCount,
      prevQueryInfo, // 这里返回 prevQueryInfo 只是为了能在 Vue Devtools 中看到它的值，方便调试
      paginationInfo,
      dynamicSlotNames,
      canCreate,
      canDelete,
      canUpdate,
      headHandlerPermission,
      handleSelectionChange,
      getPageData,
      handleDeleteClick,
      handleDeleteCancel
    }
  }
})
</script>

<style scoped>
.page-content {
  padding: 20px;
  border-top: 10px solid #f5f5f5;
}

.operation-del-btn {
  color: orangered;
}
</style>
