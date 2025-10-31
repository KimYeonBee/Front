import { useEffect, useState } from "react";
import { getaddress } from "@apis/home/getaddress";

// 사용자의 현재 위도, 경도값 불러오기
export function useUserLocation(){
    const [location, setLocation] = useState<{
        latitude: number | null;
        longtitude: number | null;
    }>({ latitude:null, longtitude:null });

    const [error, setError] = useState<string | null>(null);

    useEffect(()=> {
        if(!navigator.geolocation) {
            setError("위치 정보 불러오기 실패");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setLocation({
                    latitude: pos.coords.latitude,
                    longtitude: pos.coords.longitude,
                });
            },
            (err) => {
                setError(err.message);
            },
        );
    }, []);

    return { ...location, error};
}

// 사용자의 현재 위경도값 바탕으로 주소 변환
export function useFetchAddress(
    latitude: number | null,
    longtitude: number | null
){
    const [address, setAddress] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(()=> {
        if (latitude ===null || longtitude ===null){
            setAddress(null);
            return;
        }

        let isMounted = true;
        setError(null);

        getaddress(latitude, longtitude)
        .then((addr) => {
            if (isMounted) {
                setAddress(addr);
            }
        })
        .catch((err) => {
            if(isMounted) {
                setError(err.message);
                setAddress("오류");
            }
        });

        return () => {
            isMounted = false;
        };
    }, []);
    return {address, error}
}