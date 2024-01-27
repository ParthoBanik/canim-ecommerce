

"use client";

import { useEffect, useMemo } from "react";
import { useDispatch } from "react-redux";
import { usePersistLoginQuery } from "@/services/auth/authApi";
import { addUser } from "@/features/auth/authSlice";

const AppWrapper = ({ children }) => {
  const dispatch = useDispatch();
  const { data: userData, isError: userError } = usePersistLoginQuery();
  const user = useMemo(() => userData?.data || {}, [userData]);

  useEffect(() => {
    if (!userError) {
      dispatch(addUser(user));
    }
  }, [userData, userError, dispatch, user]);

  return <>{children}</>;
};

export default AppWrapper;
