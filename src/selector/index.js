import {createSelector} from  'reselect'

const getEntityData =(state)=>state.entityData
const getPageSize =(state)=>state.pageSize
const getFromIdx =(state)=>state.fromIdx
export const entityUISelector = createSelector(
    [getEntityData,getPageSize, getFromIdx],
    (entityData,pageSize,fromIdx)=>{
        pageSize=parseInt(pageSize);
        fromIdx=parseInt(fromIdx);
        let toIdx = fromIdx+pageSize > entityData.totalCount?entityData.totalCount:fromIdx+pageSize;
        let disPlayItems=entityData.items.slice(fromIdx, toIdx)
        let pageNo=Math.ceil((fromIdx+1)/pageSize);
        let fromNo=fromIdx+1;
        return{
            fromNo,
            toIdx,
            disPlayItems,
            pageNo
        }
    }
)