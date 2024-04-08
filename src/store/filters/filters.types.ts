// import { TypeProductDataFilters } from "@/services/product/product.types"


export interface IFiltersState {
    isFilterUpdated: boolean   
    queryParams: any
}   

export interface IFiltersActionsPayload {
    key: any   
    value: string
}