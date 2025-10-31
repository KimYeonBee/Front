const apiKey = import.meta.env.VITE_KAKAO_REST_API_KEY;

export async function getaddress(
    latitude:number,
    longtitude:number
) : Promise<string>{
    
    const url = `https://dapi.kakao.com/v2/local/geo/coord2address.json?x=${longtitude}&y=${latitude}&input_coord=WGS84`;

    const headers = {
        Authorization:`KakaoAK ${apiKey}`,
    };

    try{
        const response = await fetch(url, {headers});
        if(!response.ok){
            throw new Error(`카카오 API 호출 실패: ${response.status}`);
        }

        const data = await response.json();

        if (data.documents && data.documents.length > 0){
            const region_gu = data.documents[0].address.region_2depth_name || "";
            const region_dong = data.documents[0].address.region_3depth_name || "";

            if (region_gu || region_dong){
                return region_gu + " " + region_dong;
            }
            return "주소 정보를 찾을 수 없습니다."
        }
        else {
            return "좌표에 해당하는 주소가 없습니다."
        }
    }
    catch (error) {
    console.error("역지오코딩 오류:", error);
    throw new Error("주소를 불러오는 데 실패했습니다.");
    }
}
