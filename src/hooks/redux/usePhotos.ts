import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Dispatch } from "@reduxjs/toolkit";

import { RootStateT } from "../../store/slices";
import {
  photosSelector,
  fetchPhotos,
  PhotosDataT,
  PhotosT,
} from "../../store/slices/photos";

const usePhotos = (): {
  data: PhotosDataT;
  isLoading: boolean;
} => {
  const dispatch = useDispatch<Dispatch<any>>();
  const { data, isLoading } = useSelector<RootStateT, PhotosT>(photosSelector);

  useEffect(() => {
    dispatch(fetchPhotos());
  }, []);

  return { data, isLoading };
};

export default usePhotos;