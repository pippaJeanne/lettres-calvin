import { fetchData } from "$lib/utils";
import { json } from "@sveltejs/kit";

export const GET = async ({fetch}) => {
    const dataLetter = await fetchData(fetch);
    return json(dataLetter)

}