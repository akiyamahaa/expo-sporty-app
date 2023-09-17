import { collection, doc, setDoc } from "firebase/firestore";
import { IFood } from "../type/common";
import { firebaseDb, firebaseStorage } from "../firebase";
import uuid from "react-native-uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const foodSample: IFood[] = [
  {
    name: "Cuộn bơ, cá hồi (đồ ăn Nhật Bản)",
    calories: 136,
    quantity: 100,
    image:
      "https://cdn.tgdd.vn/2021/06/CookRecipe/Avatar/sushi-bo-ca-hoi-thumbnail.jpg",
    content: [],
  },
  {
    name: "Cả xoăn Kale",
    calories: 124,
    quantity: 100,
    image:
      "https://file.hstatic.net/1000401180/file/cai-xoan-da-lat_25d75e2ad3034c638da75d39d65f6abf_grande.jpg",
    content: [],
  },
  {
    name: "Thịt bò",
    calories: 210,
    quantity: 100,
    image:
      "https://suckhoedoisong.qltns.mediacdn.vn/Images/nguyenhong/2018/12/01/bo-ham-du-du-21.jpg",
    content: [],
  },
];

const uploadImage = async (uri: string) => {
  // It won't upload image if image is not change
  const blob: any = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function (e) {
      console.log(e);
      reject(new TypeError("Network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });
  const avatarName = uuid.v4() as string;
  const fileRef = ref(firebaseStorage, avatarName);
  await uploadBytes(fileRef, blob);

  // We're done with the blob, close and release it
  blob.close();

  const avatarUrl = await getDownloadURL(fileRef);
  return { avatarName, avatarUrl };
};

export const createFood = async () => {
  const foodUpload = foodSample.map(async (food) => {
    const foodDocRef = doc(collection(firebaseDb, "foods"));
    const { avatarUrl } = await uploadImage(food.image!);
    await setDoc(foodDocRef, {
      ...food,
      id: foodDocRef.id,
      image: avatarUrl,
    });
  });
  await Promise.all(foodUpload);
};
