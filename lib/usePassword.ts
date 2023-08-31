import {useEffect} from "react";
import Router from "next/router";
import useSWR from "swr";

export default function usePassword({
                                        redirectTo = "",
                                        redirectIfFound = false
                                    } = {}
) {
    const {data: password, mutate: mutatePassword} = useSWR("/api/password");

    useEffect(() => {
        if (!redirectTo || !password) return;

        if (
            (redirectTo && !redirectIfFound && !password?.isLoggedIn) ||
            (redirectIfFound && password?.isLoggedIn)
        ) {
            Router.push(redirectTo);
        }
    }, [password, redirectIfFound, redirectTo]);

    return {password, mutatePassword};
}
