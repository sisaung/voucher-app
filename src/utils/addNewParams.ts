import { SortData } from "../components/SortData"

const addNewParams = (sortData: SortData, params: string) => {
    
    const searchParams = new URLSearchParams(params);
    searchParams.set("sort_by", sortData.sort_by);
    searchParams.set("sort_direction", sortData.sort_direction);

    return searchParams
    
}
export default addNewParams