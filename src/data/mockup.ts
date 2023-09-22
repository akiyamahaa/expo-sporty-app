import { collection, doc, setDoc } from "firebase/firestore";
import { IExercise, IFood, INews } from "../type/common";
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

const exerciseSample: IExercise[] = [
  {
    name: "Push Up",
    time: "45",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwLi5kHCBX3RdZ8K5iIy-dUm10g-sKEHHd1A&usqp=CAU",
    content: [],
  },
  {
    name: "Bench Press",
    time: "45",

    image:
      "https://img.livestrong.com/640/cme-data/getty%2F8f630f91c4f84fc581e7d54e77caec27.jpg",
    content: [],
  },
  {
    name: "Squat",
    time: "45",
    image:
      "https://images.ctfassets.net/hjcv6wdwxsdz/KT4PpNyA0f5BM0u9o6oPH/8bf552d8c327f777e7d9cb28904e7615/squats-claudia-hold.png?w=1200",
    content: [],
  },
];
const newsSample: INews[] = [
  {
    name: "Vì sao sức khỏe là quan trọng nhất?",
    subTitle: "Rau củ quả và các loại hạt là thực phẩm rất tốt cho sức khỏe",
    image:
      "https://thegioidiengiai.com/images/detailed/0/vi-sao-suc-khoe-quan-trong-nhat-voi-cuoc-song-moi-nguoi.jpg",
    content: [
      {
        title:
          'Xây dựng chế độ ăn uống khoa học, lành mạnh <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
        content:
          'Ăn uống là một trong những yếu tố vô cùng quan trọng quyết định đến sức khỏe của con người. Ông tổ của ngành y Hippocrates cũng đã từng nói "Hãy để thức ăn là thuốc của bạn”, không có loại thuốc nào quý giá và hữu hiệu bằng việc bạn lựa chọn cẩn thận, thông minh và khoa học những loại thực phẩm mà b <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>n tiêu thụ hàng ngày. ...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
      },
      {
        title:
          'Ăn nhiều hơn rau củ quả tươi, và các loại hạt <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
        content:
          'Rau củ quả và các loại hạt là thực phẩm rất tốt cho sức khỏe. Bởi những loại thực phẩm này là cả một kho chất dinh dưỡng, vitamin, khoáng chất,… có thể cung cấp cho cơ thể, giúp cơ thể khỏe mạnh hơn. <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
      },
      {
        title:
          'Thường xuyên vận động, luyện tập thể dục, thể thao <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
        content:
          'Một điều rất quan trọng để có sức khỏe tốt nữa là bạn phải vận động cơ thể thường xuyên. Nếu bạn chăm chỉ luyện tập thể dục, thể thao vận động thường xuyên, vóc dáng của bạn không chỉ được cải thiện mà não bộ và các hormone trong cơ thể còn được kích thích để hoạt động tối ưu, tăng cường sức khỏe. <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. Nhiều nghiên cứu đã chỉ ra rằng, tập thể dục, thể thao có thể làm giảm trầm cảm và giảm nguy cơ mắc các bệnh mạn tính như béo phì, tiểu đường loại 2, bệnh tim mạch, bệnh Alzheimer và rất nhiều loại khác. <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
      },
    ],
  },
  {
    name: "5 thói quen tốt để khoẻ hơn mỗi ngày",
    subTitle: "Tìm hiểu về 5 thói quen tốt cho sức khỏe từ Prudentia",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0SNYRL-6-g7W63ZKVYbw_69KZpnRDx-5T0A&usqp=CAU",
    content: [
      {
        title:
          'Xây dựng chế độ ăn uống khoa học, lành mạnh <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
        content:
          'Ăn uống là một trong những yếu tố vô cùng quan trọng quyết định đến sức khỏe của con người. Ông tổ của ngành y Hippocrates cũng đã từng nói "Hãy để thức ăn là thuốc của bạn”, không có loại thuốc nào quý giá và hữu hiệu bằng việc bạn lựa chọn cẩn thận, thông minh và khoa học những loại thực phẩm mà b <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>n tiêu thụ hàng ngày. ...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
      },
      {
        title:
          'Ăn nhiều hơn rau củ quả tươi, và các loại hạt <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
        content:
          'Rau củ quả và các loại hạt là thực phẩm rất tốt cho sức khỏe. Bởi những loại thực phẩm này là cả một kho chất dinh dưỡng, vitamin, khoáng chất,… có thể cung cấp cho cơ thể, giúp cơ thể khỏe mạnh hơn. <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
      },
      {
        title:
          'Thường xuyên vận động, luyện tập thể dục, thể thao <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
        content:
          'Một điều rất quan trọng để có sức khỏe tốt nữa là bạn phải vận động cơ thể thường xuyên. Nếu bạn chăm chỉ luyện tập thể dục, thể thao vận động thường xuyên, vóc dáng của bạn không chỉ được cải thiện mà não bộ và các hormone trong cơ thể còn được kích thích để hoạt động tối ưu, tăng cường sức khỏe. <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. Nhiều nghiên cứu đã chỉ ra rằng, tập thể dục, thể thao có thể làm giảm trầm cảm và giảm nguy cơ mắc các bệnh mạn tính như béo phì, tiểu đường loại 2, bệnh tim mạch, bệnh Alzheimer và rất nhiều loại khác. <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a>...Cảm ơn Quý khách đã quan tâm nội dung về <a href="https://thegioidiengiai.com">máy lọc nước ion kiềm</a> #tgdgcopyright: tại Tập đoàn Thế Giới Điện Giải - Chuỗi máy điện giải ion kiềm số 1 Châu Á & duy nhất được vinh danh quốc tế. ',
      },
    ],
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

export const createExercise = async () => {
  const exerciseUpload = exerciseSample.map(async (exercise) => {
    const exerciseDocRef = doc(collection(firebaseDb, "exercises"));
    const { avatarUrl } = await uploadImage(exercise.image!);
    await setDoc(exerciseDocRef, {
      ...exercise,
      id: exerciseDocRef.id,
      image: avatarUrl,
    });
  });
  await Promise.all(exerciseUpload);
};
export const createNews = async () => {
  const newsUpload = newsSample.map(async (news) => {
    const newsDocRef = doc(collection(firebaseDb, "news"));
    const { avatarUrl } = await uploadImage(news.image!);
    await setDoc(newsDocRef, {
      ...news,
      id: newsDocRef.id,
      image: avatarUrl,
    });
  });
  await Promise.all(newsUpload);
};
