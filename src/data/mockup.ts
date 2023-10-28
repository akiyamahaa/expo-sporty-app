import { collection, doc, setDoc } from "firebase/firestore";
import { IExercise, IFood, INews } from "../type/common";
import { firebaseDb, firebaseStorage } from "../firebase";
import uuid from "react-native-uuid";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";

const foodSample: IFood[] = [
  //   {
  //     name: "Thịt bò",
  //     calories: 182,
  //     quantity: 100,
  //     image:
  //       "https://cdn.tgdd.vn/2021/06/CookRecipe/Avatar/sushi-bo-ca-hoi-thumbnail.jpg",
  //     content: [
  //       {
  //         title: "Lý do mà các gymer nên ăn thịt bò",
  //         image:
  //           "https://bosothem.com/wp-content/uploads/2020/10/goc-giai-dap-vi-sao-tap-gym-nen-%C4%83n-thit-bo-	bosothem_com-2.jpg",
  //         content:
  //           "Theo các chuyên gia dinh dưỡng, thịt bò chính là lựa chọn tốt nhất trong chế độ dinh dưỡng cho người tập 	gym. Đây cũng là thực phẩm mà các vận động viên thể hình chuyên nghiệp luôn có trong thực đơn. ",
  //       },
  //       {
  //         title: "Tập gym nên ăn thịt bò do có nhiều Protein và Kali",
  //         image: "",
  //         content:
  //           "Thịt bò rất giàu đạm, cụ thể trong 100gr loại thịt này thì có tới 25g protein. Trong dinh dưỡng của người 	tập gym, kali đóng vai trò rất quan trọng. Nó hỗ trợ giảm tình trạng chuột rút có thể xảy ra trong quá trình 	luyện tập. Ngoài ra Kali trong thịt bò còn giúp cho xương khớp được chắc khỏe hơn.",
  //       },
  //       {
  //         title: "Tập gym nên ăn thịt bò vì có chứa Creatine và Alanine",
  //         image:
  //           "https://bosothem.com/wp-content/uploads/2020/10/goc-giai-dap-vi-sao-tap-gym-nen-%C4%83n-thit-bo-bosothem_com-3.jpg",
  //         content:
  //           "Creatine có vai trò dự trữ năng lượng trong tế bào. Nó cung cấp với cường độ cao cho các hoạt động của cơ bắp. Và thúc đẩy hàm lượng mitochondria trong tế bào cơ gia tăng, giữ nước đồng thời hỗ trợ hoạt động của protein.",
  //       },
  //     ],
  //   },
  //   {
  //     name: "trứng",
  //     calories: 166,
  //     quantity: 1,
  //     image:
  //       "https://bazaarvietnam.vn/wp-content/uploads/2021/02/mon-an-low-carb-giam-can_245119171.jpg",
  //     content: [
  //       {
  //         title: "tại sao nhiều người tập thể hình lại ăn trứng",
  //         content:
  //           "trứng là một nguồn protein chất lượng cao và nó là một nguồn protein dễ tiêu hóa và dễ hấp thụ, cung cấp những axit amin chủ yếu mà cơ thể không tự tổng hợp được. Ngoài ra, trứng còn chứa nhiều các chất dinh dưỡng quan trọng khác như vitamin A, vitamin D, vitamin B12, selen và sắt",
  //       },
  //     ],
  //   },
  //   {
  //     name: "gạo trắng",
  //     calories: 130,
  //     quantity: 100,
  //     image: "https://live.staticflickr.com/1/374797_4d0272f14f_z.jpg",
  //     content: [
  //       {
  //         title: "vì sao người ta lại ăn cơm trắng",
  //         content:
  //           "vì cơm là nguồn cung cấp cacbonhydrate chính. Cacbonhydrate là nguồn năng lượng chính cho cơ thể, đặt biệt là các hoạt động thể chất cường độ cao. Ngoài ta cơm còn chứa một lượng nhỏ protein và chất xơ",
  //       },
  //     ],
  //   },
  //   {
  //     name: "khoai tây",
  //     calories: 80,
  //     quantity: 100,
  //     image:
  //       "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSfArAEnL3xY6oLfSGQ_eBRg8vgIZPeiioetFY9SmTWKRcYG9sSfIy6_O6K82lf",
  //     content: [
  //       {
  //         title: "Lợi ích của việc ăn khoai tây",
  //         content: `
  // -Cung cấp năng lượng: Khoai tây là một nguồn cung cấp carbohydrate chính, là nguồn năng lượng chính cho cơ thể.
  // -Tăng cường sức khỏe tim mạch: Khoai tây chứa kali, một khoáng chất quan trọng giúp điều hòa huyết áp.
  // -Giảm nguy cơ mắc bệnh tiểu đường: Khoai tây chứa chất xơ, giúp kiểm soát lượng đường trong máu.
  // -Tốt cho tiêu hóa: Khoai tây chứa chất xơ, giúp cải thiện tiêu hóa và hấp thụ dinh dưỡng.`,
  //       },
  //     ],
  //   },
  //   {
  //     name: "rau chân vịt",
  //     calories: 23,
  //     quantity: 100,
  //     image:
  //       "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQwrFrFxk1F8Nvdp3UghjzHVzDC--Of2JoHwFOQWUWVw6-jC_aBtDtGMctHXzEp",
  //     content: [
  //       {
  //         title: "lợi ích của rau chân vịt",
  //         content: `
  // -Tăng cường sức khỏe tim mạch: Rau chân vịt chứa vitamin K, một vitamin quan trọng giúp điều hòa đông máu và giảm nguy cơ mắc bệnh tim mạch.
  // -Giảm nguy cơ mắc bệnh ung thư: Rau chân vịt chứa các chất chống oxy hóa, giúp bảo vệ tế bào khỏi bị hư hại do gốc tự do.
  // -Tốt cho thị lực: Rau chân vịt chứa vitamin A, một vitamin quan trọng giúp duy trì thị lực khỏe mạnh.
  // -Tăng cường hệ miễn dịch: Rau chân vịt chứa vitamin C, một vitamin quan trọng giúp tăng cường hệ miễn dịch.
  // -Tốt cho tiêu hóa: Rau chân vịt chứa chất xơ, giúp cải thiện tiêu hóa và hấp thụ dinh dưỡng.`,
  //       },
  //     ],
  //   },
  //   {
  //     name: "bông cải",
  //     calories: 34,
  //     quantity: 100,
  //     image:
  //       "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcShZC89dXfKfQwWc5RyhVetb1i9xl97u13OFgGKiG1fCO9sWrvIw1_zZC8U_hK8",
  //     content: [
  //       {
  //         title: "lợi ích của bông cải xanh",
  //         content: `
  // -Tăng cường hệ miễn dịch: Bông cải xanh chứa vitamin C, một chất chống oxy hóa giúp tăng cường hệ miễn dịch.
  // -Giảm nguy cơ mắc bệnh ung thư: Bông cải xanh chứa các chất chống oxy hóa và sulforaphane, giúp bảo vệ tế bào khỏi bị hư hại do gốc tự do.
  // -Tốt cho sức khỏe tim mạch: Bông cải xanh chứa vitamin K, một vitamin quan trọng giúp điều hòa đông máu và giảm nguy cơ mắc bệnh tim mạch.
  // -Tốt cho tiêu hóa: Bông cải xanh chứa chất xơ, giúp cải thiện tiêu hóa và hấp thụ dinh dưỡng.`,
  //       },
  //     ],
  //   },
  //   {
  //     name: "Ức gà",
  //     calories: 165,
  //     quantity: 100,
  //     image:
  //       "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/01/Air-Fryer-Chicken-Breast-main.jpg",
  //     content: [
  //       {
  //         title: "Lợi ích của ức gà",
  //         content: `-Giảm cân: Ức gà là một thực phẩm ít calo và giàu protein, có thể giúp bạn cảm thấy no lâu hơn và giảm lượng calo nạp vào.
  // -Tăng cường cơ bắp: Protein là một chất dinh dưỡng thiết yếu cần thiết cho sự phát triển và sửa chữa cơ bắp. Ức gà là một nguồn protein tuyệt vời, có thể giúp bạn tăng cường cơ bắp.
  // -Cải thiện sức khỏe tim mạch: Ức gà là một nguồn protein nạc, có thể giúp giảm cholesterol xấu và tăng cholesterol tốt.
  // -Tăng cường hệ miễn dịch: Ức gà là một nguồn cung cấp vitamin và khoáng chất tốt, bao gồm vitamin B6, niacin và selen. Những chất dinh dưỡng này có thể giúp tăng cường hệ miễn dịch.
  // -Tốt cho sức khỏe xương: Ức gà là một nguồn cung cấp protein và vitamin D. Protein là cần thiết cho sự phát triển và sửa chữa xương, và vitamin D giúp cơ thể hấp thụ canxi, một khoáng chất cần thiết cho sức khỏe xương.`,
  //       },
  //     ],
  //   },
  //   {
  //     name: "cá hồi",
  //     calories: 210,
  //     quantity: 100,
  //     image:
  //       "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQsVd3JEJ0fXzi23B4nXzXkgJJJYLWlc_7KcCIpSlwtr2SFnJt3uZVJwovod-3s",
  //     content: [
  //       {
  //         title: ":Lợi ích của cá hồi",
  //         content: `-Giảm viêm: Axit béo omega-3 trong cá hồi có thể giúp giảm viêm, một nguyên nhân gây ra nhiều bệnh mãn tính, chẳng hạn như bệnh tim, ung thư và bệnh Alzheimer.
  // -Tăng cường sức khỏe tim mạch: Axit béo omega-3 có thể giúp giảm cholesterol xấu và tăng cholesterol tốt, từ đó giúp giảm nguy cơ mắc bệnh tim.
  // -Giảm nguy cơ mắc bệnh Alzheimer và Parkinson: Các nghiên cứu cho thấy rằng axit béo omega-3 có thể giúp giảm nguy cơ mắc bệnh Alzheimer và Parkinson, hai bệnh thoái hóa thần kinh.
  // -Tăng cường chức năng não: Axit béo omega-3 có thể giúp cải thiện chức năng não, bao gồm trí nhớ và khả năng học tập.
  // -Cải thiện sức khỏe mắt: Axit béo omega-3 có thể giúp cải thiện sức khỏe mắt, bao gồm giảm nguy cơ thoái hóa điểm vàng và đục thủy tinh thể.`,
  //       },
  //     ],
  //   },
  //   {
  //     name: "trái chuối",
  //     calories: 90,
  //     quantity: 1,
  //     image:
  //       "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjUPXW_yL6-Nwx14egrJ7COqRnRfD0kqNrAQxYk51opwNEPwx1nvP17c19NNjl",
  //     content: [
  //       {
  //         title: "Lợi ích của việc ăn chuối",
  //         content: `-Giảm huyết áp: Chuối là một nguồn cung cấp kali tuyệt vời, một khoáng chất cần thiết cho sức khỏe tim mạch. Kali có thể giúp giảm huyết áp bằng cách cân bằng tác dụng của natri trong cơ thể.
  // -Tăng cường năng lượng: Chuối là một nguồn carbohydrate tốt, cung cấp năng lượng cho cơ thể. Chuối cũng chứa chất xơ, có thể giúp cơ thể hấp thụ carbohydrate chậm hơn, từ đó giúp duy trì mức năng lượng ổn định.
  // -Tốt cho hệ tiêu hóa: Chuối là một nguồn cung cấp chất xơ tốt, cần thiết cho sức khỏe tiêu hóa. Chất xơ giúp thúc đẩy nhu động ruột và ngăn ngừa táo bón.`,
  //       },
  //     ],
  //   },
  //   {
  //     name: "sữa",
  //     calories: 61,
  //     quantity: 100,
  //     image:
  //       "https://img.freepik.com/premium-photo/glass-milk-isolated-white_62856-4083.jpg?w=360",
  //     content: [
  //       {
  //         title: "Lợi ích của sữa",
  //         content: `-Giúp tăng trưởng và phát triển: Sữa là một nguồn cung cấp protein, canxi và các chất dinh dưỡng khác cần thiết cho sự phát triển và phát triển của trẻ em.
  // -Tốt cho sức khỏe xương: Sữa cung cấp canxi, cần thiết cho sức khỏe xương. Canxi giúp xương chắc khỏe và ngăn ngừa loãng xương.
  // -Giảm nguy cơ mắc bệnh tim: Sữa chứa các chất dinh dưỡng có thể giúp giảm nguy cơ mắc bệnh tim, chẳng hạn như canxi, kali và axit béo omega-3.
  // -Tăng cường hệ miễn dịch: Sữa chứa vitamin D, cần thiết cho hệ miễn dịch.`,
  //       },
  //     ],
  //   },
];
const exerciseSample: IExercise[] = [
  {
    name: "Bench press",
    time: "10", // minutes
    image:
      "https://img.livestrong.com/640/cme-data/getty%2F8f630f91c4f84fc581e7d54e77caec27.jpg",
    content: [
      {
        title: "Tại sao nên Bench Press?",
        image: "",
        content: `Không còn nghi ngờ gì nữa, lợi ích lớn nhất  bạn sẽ nhận được khi tập Bench Press là sức mạnh của phần thân trên được cải thiện đáng kể. Các nhóm cơ được hưởng lợi nhiều nhất từ bài tập Bench Press là cơ ngực, cơ vai trước của vai và cơ tam đầu. Tập Bench Press đều đặn sẽ kích thích sự phát triển của các nhóm cơ này cả về kích thước lẫn sức mạnh.

            Bên cạnh đó, Bench Press cũng là bài tập cực kỳ hữu ích trong việc khôi phục sự cân bằng cho các nhóm cơ đối với các vận động viên bơi lội, leo núi hay đấu vật (do sử dụng cơ kéo nhiều).
            
            Nhiều người khi tập luyện Bench Press cũng thấy có sự thay đổi tích cực về sức khoẻ cả về mặt thể chất (tăng cơ - giảm mỡ, xương khớp chắc khỏe hơn) lẫn tinh thần (giảm thiểu căng thẳng, stress).`,
      },
      {
        title: "Các bước thực hiện Bench Press",
        image: "",
        content: ` 
-Bước 1: nằm xuống ghế tạ vào 3 điểm mông, lưng và đầu áp sat ghế
-Bước 2: đặt chân lên sàn, rộng bằng vai
-Bước 3: cầm tạ đòn ngang vai
-Bước 4: hít vào hạ tạ chạm vào ngực
-Bước 5: thở ra nâng tạ lên, duỗi thẳng tay
-Bước 6: lặp lại cho số rep mà bạn cần `,
      },
    ],
  },
  {
    name: "pull-up",
    time: "10",
    image:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSYRPYIoBDa8vIgyclAdlKqlRem_DA_K6yzCtBnN81dAqa9bnGG88RCCklLfcc6",
    content: [
      {
        title: "Tại sao nên pull-up",
        content: `-Phát triển cơ lưng, cơ vai và cơ xô: Pull up là một bài tập tuyệt vời giúp phát triển cơ lưng, cơ vai và cơ xô. Các nhóm cơ này đóng vai trò quan trọng trong việc giữ cho cơ thể ổn định và linh hoạt.
        -Tăng cường sức mạnh: Pull up là một bài tập sức mạnh tuyệt vời giúp tăng cường sức mạnh của tay, vai và lưng. Sức mạnh này có thể giúp bạn thực hiện các hoạt động hàng ngày một cách dễ dàng hơn.
        -Tăng cường sức bền: Pull up cũng là một bài tập sức bền tuyệt vời giúp tăng cường sức bền của tay, vai và lưng. Sức bền này có thể giúp bạn tập luyện lâu hơn và hiệu quả hơn.
        -Cải thiện khả năng cân bằng: Pull up cũng giúp cải thiện khả năng cân bằng của bạn. Khả năng cân bằng tốt có thể giúp bạn tránh bị chấn thương khi tập luyện hoặc trong các hoạt động hàng ngày.
        -Tăng cường tự tin: Pull up là một bài tập thách thức đòi hỏi sức mạnh và sự kiên trì. Khi bạn có thể thực hiện pull up, bạn sẽ cảm thấy tự tin hơn về bản thân.`,
      },
    ],
  },
  {
    name: "barbell row",
    time: "10",
    image:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRrZtNFBAAdPXy7xn8M7pP6yunmdmSZgM0b8IC6Kh3A5UQPmnSSBo1XZHWBEUYX",
    content: [
      {
        title: "Cách thức hiện barbell row",
        content: `-Bước 1:Đứng trước giá tạ, hai chân rộng bằng vai, lưng thẳng, lòng bàn tay hướng xuống.
-Bước 2:Đặt hai tay lên tạ đòn, rộng bằng vai hoặc rộng hơn một chút.
-Bước 3:Hít vào và hạ tạ xuống cho đến khi tạ chạm đùi.
-Bước 4:Thở ra và kéo tạ lên cho đến khi tạ chạm ngực.
-Bước 5:Lặp lại các bước 3-4.`,
      },
    ],
  },
  {
    name: "Barbell squat",
    time: "10",
    image:
      "https://steelsupplements.com/cdn/shop/articles/shutterstock_2018381615_1000x.jpg?v=1636630369",
    content: [
      {
        title: "Các để thực hiện barbell squat",
        content: `-Bước 1:Đặt thanh tạ trên vai, ngay phía trên đỉnh vai.
-Bước 2:Đứng rộng bằng vai với bàn chân hướng ra ngoài một góc khoảng 30 độ.
-Bước 3:Hít vào và gập đầu gối, hạ thân người xuống sao cho đùi song song với mặt đất.
-Bước 4:Giữ lưng thẳng và vai sau, không để mông nhô ra sau.
-Bước 5:Thở ra và đẩy ngược thân người lên, trở về vị trí ban đầu.`,
      },
    ],
  },
  {
    name: "Deadlift",
    time: "10",
    image:
      "https://www.transparentlabs.com/cdn/shop/articles/TL_Blog_Template_30.jpg?v=1670590121",
    content: [
      {
        title: "Cách để deadlift",
        content: `-Bước 1:Đứng với chân rộng bằng vai và thanh tạ ở phía trước bạn, với trọng lượng được phân bổ đều.Bước 2:Cúi xuống và nắm thanh tạ bằng một tay nắm trên đầu, hơi rộng hơn vai.
-Bước 3:Giữ lưng thẳng và lõi của bạn được kích hoạt.
-Bước 4:Nâng thanh tạ lên bằng cách đẩy qua gót chân và mở rộng hông.
-Bước 5:Tiếp tục nâng thanh tạ cho đến khi nó đạt đến độ mở rộng hoàn toàn, với hông được mở rộng hoàn toàn và vai sau.
-Bước 6:Hạ thanh tạ xuống đất từ từ, đảo ngược các bước trên.`,
      },
    ],
  },
  {
    name: "Shoulder press",
    time: "10",
    image:
      "https://bizweb.dktcdn.net/100/011/344/files/dumbbell-shoulder-press.jpg?v=1679995589083",
    content: [
      {
        title: "Cách để shoulder press",
        content: `-Bước 1:Đứng với chân rộng bằng vai và giữ tạ cầm ở hai bên, với lòng bàn tay hướng vào nhau
-Bước 2:Hít vào và đẩy tạ lên cao qua đầu, giữ cho cánh tay thẳng.
-Bước 3:Thở ra và hạ tạ xuống vị trí bắt đầu.`,
      },
    ],
  },
  {
    name: "Bicep curl",
    time: "10",
    image:
      "https://weighttraining.guide/wp-content/uploads/2016/05/Dumbbell-Alternate-Biceps-Curl-resized.png",
    content: [
      {
        title: "Cách để bicep curl",
        content: `-Bước 1:Đứng với chân rộng bằng vai và giữ tạ cầm ở hai bên, với lòng bàn tay hướng xuống.
-Bước 2:Hít vào và uốn cong cánh tay, nâng tạ lên về phía vai.
-Bước 3:Thở ra và hạ tạ xuống vị trí bắt đầu.`,
      },
    ],
  },
  {
    name: "Barbell lunges",
    time: "10",
    image:
      "https://pump-app.s3.eu-west-2.amazonaws.com/exercise-assets/00781101-Barbell-Rear-Lunge_Thighs_small.jpg",
    content: [
      {
        title: "Cách để thực hiện barbell lunges",
        content: `-Bước 1:Đặt thanh tạ trên vai, ngay phía trên đỉnh vai.
-Bước 2:Đứng rộng bằng vai với bàn chân hướng ra ngoài một góc khoảng 30 độ.
-Bước 3:Hít vào và bước chân phải về phía trước một bước dài, sao cho đầu gối phải tạo thành một góc 90 độ.
-Bước 4:Hạ mông xuống sao cho đùi phải song song với mặt đất.
-Bước 5:Thở ra và đẩy ngược thân người lên, trở về vị trí ban đầu.
-Bước 6:Lặp lại các động tác với chân trái.`,
      },
    ],
  },
  {
    name: "Chin-up",
    time: "10",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVIkWPhc9fbVg5cjmHMUmof31o5SJ0Mbaej2gTautZChiIz0jeSegpFLJ6Ewjsp7g1znw&usqp=CAU",
    content: [
      {
        title: "Cách để chin-up",
        content: `-Bước 1:Cầm thanh xà bằng lòng bàn tay hướng vào bạn, với khoảng cách rộng bằng vai hoặc hẹp hơn một chút.
-Bước 2:Treo người xuống sao cho cằm của bạn ngang với thanh xà.
-Bước 3:Hít vào và kéo người lên cho đến khi cằm của bạn vượt qua thanh xà.
-Bước 4:	Thở ra và hạ người xuống vị trí bắt đầu.`,
      },
    ],
  },
];
const newsSample: INews[] = [
  {
    name: "TẬP GYM LÀ GÌ? TẠI SAO CÁC BẠN TRẺ NÊN TẬP GYM HÀNG NGÀY",
    subTitle: "",
    image: "https://swequity.vn/wp-content/uploads/2019/07/tap-gym-nam.jpg",
    content: [
      {
        title: "Gym là gì?",
        image: "",
        content:
          "Tập gym là một hình thức vận động thông qua sự hỗ trợ của máy móc vào các cơ nhằm giúp cơ thể khỏe mạnh. Giúp các bạn trẻ tự tin hơn về vóc dáng của mình.",
      },
      {
        title: "Vậy tập gym có tác dụng gì?",
        image: "",
        content: `Tập gym mang lại thân hình đẹp và săn chắc:
        Luyện tập thể dục hàng ngày kết hợp với chế độ dinh dưỡng hợp lý. Nó sẽ mang lại cho mọi người vóc dáng và thân hình cân đối. Lượng mỡ thừa giảm đáng kể, cơ bắp săn chắc và thân hình cân đối.
        Tập gym giúp tăng cường sức mạnh cơ bắp:
        Chắc hẳn bạn cũng đã thấy cảnh một số anh chàng và cô nàng trông thì có vẻ khỏe nhưng thể lực thực sự rất yếu. Đó chính là lý do khiến mọi người cần phải tập gym để có thể tăng cường thể lực thực hiện những công việc đòi hỏi thể lực cao. Khi bạn tập Gym, các mô cơ yếu sẽ được loại bỏ và xây dựng các mô cơ mới to hơn, khỏe mạnh hơn.
        Khi bạn luyện tập, các bài tập cơ vai, cơ lưng, cơ bụng, chân. Nó giúp tăng cường sức mạnh, độ dẻo dai, khả năng chịu đựng của các cơ giúp bạn phát triển chiều cao rất tốt.`,
      },
      {
        title: "Tập gym giúp phòng ngừa bệnh tật",
        image: "",
        content:
          "Tập thể dục thường xuyên giúp con người duy trì tuổi thọ. Cũng như thế, tập gym thường xuyên giúp cải thiện sức khỏe tim mạch, giảm lượng cholesterol, phòng bệnh tai biến mạch máu não, nhồi máu cơ tim, huyết áp, xơ vữa động mạch… Ngoài ra, bạn có thể tránh được một số bệnh như loãng xương, tiểu đường, ung thư… Giúp bạn có được cơ thể khỏe mạnh, sức khỏe dồi dào mang lại cho bạn cuộc sống viên mãn.",
      },
      {
        title: "Tập Gym gúp xương chắc khỏe:",
        image: "",
        content:
          "Các mô xương của chúng ta bị thoái hóa dần theo tuổi tác, có người còn bị tình trạng loãng xương ngay khi còn trẻ. Vì thế, khi luyện tập thể hình sẽ giúp hỗ trợ quá trình tạo xương mới. Giúp xương khớp khỏe mạnh, hạn chế chấn thương và giảm tình trạng thoái hóa xương, loãng xương.",
      },
      {
        title: "Đi tập Gym cần chuẩn bị những gì",
        image: "",
        content: `
        Bạn cần có sự quyết tâm thực sự để không cảm thấy tự ti về body của mình khi tập luyện.
        Thời gian đầu, cơ thể sẽ bị đau nhức nhưng sau khi tập một thời gian thì sẽ giảm dần. Vậy nên bạn hãy cố gắng kiên trì một thời gian đầu.
        Hành trang của bạn khi tập gym bao gồm: quần áo tập gym, nước, khăn tắm, sữa tắm, dầu gội và găng tay nếu cần.
        Bạn nên chọn loại quần áo co dãn tốt, có khả năng thấm hút mồ hồi. Tốt nhất là quần áo nên làm từ 100% cotton.
        Giày thể thao bạn nên chọn loại đế bằng, nhẹ, thoáng khí có xốp lót chân.`,
      },
    ],
  },
  {
    name: "CHẾ ĐỘ ĂN CHO NGƯỜI TẬP GYM ĐẢM BẢO DINH DƯỠNG",
    subTitle: "",
    image:
      "https://medlatec.vn/ImagePath/images/20220907/20220907_che-do-an-cho-nguoi-tap-gym-1.jpg",
    content: [
      {
        title: "Nguồn dinh dưỡng cần thiết trong chế độ ăn cho người tập gym",
        image: "",
        content: `Tập gym là hoạt động có lợi cho sức khỏe, giúp cho bạn có một vóc dáng lý tưởng. Đồng thời việc tập thể hình đối kháng sẽ tăng sức mạnh về cơ bắp và phòng được một số bệnh như: bệnh tim, thận, ung thư.
        Trong đó, chế độ ăn cho người tập gym cũng góp phần quan trọng để hỗ trợ cung cấp các dưỡng chất cần thiết tốt cho cơ thể. Một số thực phẩm đảm bảo về hiệu quả cho người tập gym gồm có:`,
      },
      {
        title: "Chất protein",
        image: "",
        content: `Protein hay nhóm chất đạm có chứa nhiều axit amin là chất dinh dưỡng cần thiết trong chế độ ăn cho người tập gym. Chất đạm có vai trò quan trọng giúp tăng cơ bắp, giảm mỡ trong cơ thể.
        Khẩu phần ăn thích hợp cho người tập gym mỗi ngày cần ít nhất 2,2 gam chất đạm/ kg theo trọng lượng cơ thể của mỗi người. `,
      },
      {
        title: "Chất xơ ",
        image: "",
        content:
          "Chất xơ là dưỡng chất không thể thiếu trong chế độ ăn cho người tập gym. Chất xơ giúp cho cơ bắp được săn chắc, giảm đau cơ bắp và xương khớp. Bên cạnh đó, chất xơ còn đẩy nhanh mức tiêu thụ lượng mỡ thừa không lành mạnh trong cơ thể. Những loại thực phẩm bổ sung chất xơ thiết yếu cho cơ thể như là cà chua, đậu xanh, rau bina, rau xà lách,... bạn nên tăng cường trong mỗi bữa ăn hàng ngày.",
      },
      {
        title: "Chất béo ",
        image: "",
        content:
          "Chế độ ăn cho người tập gym cần đảm bảo về dinh dưỡng không thể loại bỏ chất béo trong khẩu phần ăn. Chất béo đóng vai trò quan trọng về cấu tạo của tế bào, cung cấp năng lượng và giúp hấp thụ những hoạt chất vitamin tan trong dầu A,D,E,K. Ngoài ra, những người đang cần tăng cơ, tăng cân thì chất béo là dưỡng chất tốt để nâng cao hiệu suất tập gym. ",
      },
      {
        title: "Tinh bột",
        image: "",
        content: `Tinh bột hay còn được gọi là carbohydrate có khả năng cung cấp năng lượng rất tốt cho cơ thể đặc biệt là trong chế độ ăn cho người tập gym. Một gam của tinh bột có thể cung cấp đến 4 calo. Đồng thời, thời gian tiêu thụ của tinh bột khá nhanh chỉ trong khoảng từ 1,5 - 2 giờ. Tinh bột có nhiều trong một số lương thực như là khoai, sắn, cơm, bún, phở.
        Các chuyên gia dinh dưỡng khuyến nghị với người tập gym để tăng cân nên bổ sung tinh bột với tỷ lệ là 45 - 60% của tổng lượng calo nạp vào mỗi ngày. Còn với người tập gym giảm cân thì lượng calo sẽ giảm xuống từ 50 - 100g trong khẩu phần ăn mỗi ngày. `,
      },
      {
        title: "Khoáng chất và vitamin cần thiết",
        image: "",
        content:
          "Vitamin cùng khoáng chất có nhiều trong hoa quả, rau củ giúp bạn tăng cường hệ miễn dịch, sức đề kháng cho cơ thể. Theo đó, với chế độ ăn cho người tập gym bạn nên bồi bổ vitamin và khoáng chất để phục hồi sức khỏe sau khi luyện tập. ",
      },
      {
        title: " Cung cấp nước cho cơ thể",
        image: "",
        content: `Nước chiếm tỷ trọng cao trong cơ thể của mỗi người, đặc biệt là trong chế độ ăn cho người tập gym thì nước càng góp phần quan trọng. Bởi vì khi bạn tập luyện với cường độ lớn việc thiếu nước dễ giảm khả năng sinh lực, bị chuột rút. Điều này cũng khó khăn khi bạn tập tạ với cổ họng và miệng khô do không bổ sung nước. Chính vì vậy, bạn nên chú ý khuyến cáo hữu ích từ Học viện Y khoa Thể thao Mỹ dành riêng cho người tập gym như dưới đây:
        Trước khi tập luyện: Bạn nên bổ sung 500 ml nước hoặc là ít hơn trước khi tập từ 1 - 2 giờ (tương đương với 2 cốc nước trung bình).
        Trong quá trình tập: Cứ mỗi 15 - 20 phút, bạn nên bổ sung thêm cho cơ thể 350ml nước (nghĩa là trong 1 giờ tập bạn cần uống 1 lít nước).`,
      },
      {
        title: "Thực phẩm không nên dùng đối với người tập gym",
        image: "",
        content: `Bên cạnh những thực phẩm cần đảm bảo trong chế độ ăn cho người tập gym thì bạn cũng cần lưu ý một số đồ ăn không tốt như sau:
        Đường: Có chứa trong nhiều bánh, kẹo, đồ uống có ga, đồ uống có đường như soda cung cấp nhiều calo nhưng lại không chứa dinh dưỡng tốt.
        Rượu: Ảnh hưởng xấu cho việc tập luyện, tác động trực tiếp đến xây dựng cơ bắp nếu sử dụng quá nhiều.
        Đồ ăn nhanh, chiên rán: Có thể kể đến một số đồ ăn chiên rán như khoai tây chiên, cá chiên,... đều có những tác hại xấu cho sức khỏe không tốt khi tập luyện`,
      },
      {
        title: " Gợi ý thực đơn cho người tập gym ",
        image: "",
        content:
          "Để giúp bạn vận dụng linh hoạt những thực phẩm giàu dinh dưỡng, phục vụ tốt cho việc rèn luyện thể hình. Dưới đây là một số gợi ý từ MEDLATEC về thực đơn trong một ngày theo chế độ ăn cho người tập gym để bạn tham khảo: ",
      },
      {
        title: "Bữa sáng",
        image: "",
        content: `Bữa sáng là một bữa ăn quan trọng trong ngày vì cung cấp năng lượng hoạt động hiệu quả để bắt đầu một ngày mới. Do vậy, bạn không nên bỏ bữa ăn sáng, thực đơn gợi ý được chia ra thành 2 nhóm đối tượng bao gồm:
        Với người tập gym tăng cân: Bạn có thể ăn phở bò hoặc phở gà cùng với 1 trái chuối. Ngoài ra, không thể thiếu bổ sung nước cần thiết cho cơ thể khoảng 300ml nước dàn đều buổi sáng.
        Với người tập gym giảm cân: Bạn có thể lựa chọn thực phẩm hỗ trợ cải thiện vóc dáng như yến mạch (45g), sữa không đường (300ml) hoặc nước ép táo (200ml) cùng với một thìa mật ong.`,
      },
      {
        title: "Bữa trưa",
        image: "",
        content: `Người tập gym tăng cân: Bạn nên ăn từ 2 - 3 chén cơm cùng với 200g thịt gà và bổ sung một số loại rau như rau chân vịt, bông cải xanh, bí đỏ (thay đổi theo mỗi bữa ăn) để giúp chế độ ăn cho người tập gym thêm phong phú về lượng dưỡng chất cần thiết.
        Người tập gym giảm cân: Với những người cần tập luyện giữ gìn vóc dáng thì nên bổ sung trong khẩu phần ăn như là 200 gam cá hồi hoặc 200g ức gà, các loại hạt (việt quất, mâm xôi, óc chó) cùng trái cây.`,
      },
      {
        title: "Bữa tối",
        image: "",
        content: `Chế độ ăn cho người tập gym tăng cân: Bạn có thể áp dụng thực đơn như bữa trưa nhưng thay đổi món ăn như là bắp cải cuộn thịt, bò hầm tiêu, canh rau củ sườn non, su su luộc, gà hầm hạt sen,...
        Chế độ ăn cho người tập gym giảm cân: bạn có thể linh hoạt thay đổi món ăn thích hợp cho việc tập luyện như là cá ngừ, các loại rau như xà lách, cà chua, rau bina hoặc cơm gạo lứt, thịt gà nướng. `,
      },
      {
        title: "Thời gian lý tưởng theo chế độ ăn cho người tập gym",
        image: "",
        content: `Tập luyện thể hình ngoài việc bổ sung dưỡng chất cần thiết, yếu tố thời gian cũng góp phần quan trọng. Sau đây là khung thời gian thích hợp với mỗi chế độ ăn cho người tập gym:
        Ăn sáng trước lúc 8 giờ: Một nguyên tắc chung là bạn không được bỏ bữa sáng trong việc tập luyện vì dễ bị đói lả, làm việc không năng suất. Thời gian thích hợp theo chuyên gia dinh dưỡng để ăn sáng là trước 8 giờ
        Ăn trưa trước 12 giờ: Để bổ sung năng lượng tốt nhất cho hoạt động buổi chiều cũng như phục hồi lại cơ thể sau quá trình tập luyện bạn nên bổ sung dưỡng chất cho bữa trưa trước 12 giờ.
        Ăn tối trước 19 giờ: Để hạn chế quá trình tích tụ mỡ trong cơ thể, bạn nên cung cấp cho cơ thể dinh dưỡng đảm bảo trước 19 giờ với bữa tối.
        Nhìn chung, để đảm bảo chế độ ăn cho người tập gym tăng cân hoặc giảm cân đều áp dụng nguyên tắc chung là cần đủ dinh dưỡng. Bạn nên cân bằng những dưỡng chất cần thiết cho mỗi bữa ăn để giúp quá trình tập luyện đạt hiệu quả cao. `,
      },
    ],
  },
  {
    name: "TẬP GYM GIẢM CÂN NHANH KHÔNG? CẦN TRÁNH NHỮNG ĐIỀU GÌ KHI GIẢM CÂN?",
    subTitle: "",
    image:
      "https://medlatec.vn/ImagePath/images/20201223/20201223_tap-gym-giam-can-nhanh-khong-la-dieu-nhieu-nguoi-con-ban-khoan.jpg",
    content: [
      {
      title: "Tập gym giảm cân nhanh không?",
        image: "",
        content: `Béo có lẽ là nỗi lo day dứt không có hồi kết, dù là nam hay nữ bạn vẫn sẽ cảm thấy tự ti với vòng eo thừa mỡ và mong muốn được sở hữu thân hình thon gọn, săn chắc. Gym là bộ môn rất được giới trẻ yêu thích và sẽ là giải pháp hoàn hảo giúp những đối tượng này cải thiện cân nặng một cách đáng tin cậy.
        Với mục đích giảm béo, những buổi tập đầu sẽ khá khó khăn khiến tâm lý ngày càng trì trệ, gây chán nản, liệu trong đầu bạn đã từng nảy sinh ra câu hỏi Tập gym giảm cân nhanh không? Phải làm gì để kết quả được cải thiện nhanh nhất có thể? Chúng tôi xin phép giải đáp rằng vấn đề này còn tùy thuộc ở bạn mà quá trình giảm cân diễn ra nhanh hay chậm. Tập gym còn dựa vào lịch bạn sắp xếp, bài tập bạn chọn, và chế độ ăn uống ra sao,...
        Nếu như bạn chăm chỉ tập luyện nhưng đều sai kỹ thuật hoặc không ăn kiêng thì chắc chắn ước mơ giảm cân sẽ rất xa vời. Thế nên hãy tuân thủ quy tắc tập luyện cũng như lựa chọn thực đơn cung cấp sao cho phù hợp nhất để kết quả đạt được tốt nhất.`,
      },
      {
        title: " Lý do không thể giảm cân nhanh",
        image: "",
        content: `
        2.1. Bỏ bữa sáng
        Đừng suy nghĩ việc nhịn ăn sáng sẽ làm bạn giảm cân nhanh hơn, đó chính là nguyên nhân khiến cơ thể cần lượng calo nhiều hơn, khiến bạn dễ đói và ăn dồn dập hơn. Điều đó càng làm cho kế hoạch giảm cân trở nên thất bại kèm theo sức khỏe ngày càng giảm sút.
        2.2. Uống ít nước
        Bạn có thể không ăn nhưng không thể nhịn uống nước, vì nước rất quan trọng cho quá trình chuyển đổi chất, giúp đốt số calo không cần thiết. Theo nghiên cứu, bạn nên uống đủ 8 ly nước mỗi ngày để đốt cháy nhiều calo hơn, hãy chăm uống nước lọc trước bữa chính và bữa phụ để cơ thể không bị thiếu nước nhé.
        2.3. Ăn no và ăn ít
        Ăn quá no hoặc ăn quá ít chính là lý do khiến bạn khó giảm cân. Bạn nên chia thức ăn thành nhiều bữa, để quá trình trao đổi chất diễn ra chậm lại và giúp cơ thể đốt cháy nhiều calo hơn.
        2.4. Không tập luyện chăm chỉ
        Chỉ ăn ít mà không tập luyện thì cũng là nguyên nhân gây khó giảm cân, ngược lại còn khiến cơ thể mệt mỏi, thiếu năng lượng, dễ sinh ra các bệnh nguy hiểm.
        2.5. Sử dụng thuốc giảm cân quá đà
        Hiện nay, nhiều người chủ quan sử dụng thuốc giảm cân như một phương pháp giảm cân nhanh chóng. Tuy nhiên, thuốc giảm cân chỉ giúp cơ thể đào thải nước ra ngoài, không giúp giảm mỡ mà còn trì trệ sức khỏe ngày càng đi xuống.`,
      },
      {
        title: "Lịch tập gym hỗ trợ giảm cân",
        image: "",
        content: `
        Để thoát khỏi tình trạng thừa mỡ thì hãy sắp xếp lịch tập một cách hợp lý, tránh trường hợp tập liên tục, quá sức gây ra nhiều ảnh hưởng xấu. Thế nên, nhằm hỗ trợ giảm cân hiệu quả
        xin mời các bạn tham khảo lịch tập mà chúng tôi đưa ra:
        Thứ 2: Tập cơ vai.
        Thứ 3:Tập cơ ngực.
        Thứ 4: Tập phần chân và bắp chân.
        Thứ 5: Tập lưng và cơ xô.
        Thứ 6: Tập cho phần vai, bụng và chân.
        Thứ 7: Tập tay trước và tay sau.
        Chủ nhật: Nghỉ ngơi hoặc chọn các bài tập nhẹ nhàng.
        Đây chỉ là lịch tập chung cho những bạn có nhu cầu, vì lịch tập thay đổi liên tục nên hãy linh động sắp xếp nhé. Không nên tập với cường độ quá cao, hãy bắt đầu với mức tập nhẹ nhất rồi từ từ nâng level lên, để cơ bắp kịp thích nghi để phát triển cân đối nhất có thể.`,
      },
      {
        title: "Chế độ bổ sung dinh dưỡng cho người tập gym giảm cân",
        image: "",
        content: "Đối với người thừa cân, vấn đề ăn uống cực kỳ quan trọng và đáng được chăm chút. Cho dù bạn ăn kiêng nhưng vẫn phải đảm bảo cung cấp đủ chất dinh dưỡng cần thiết cho cơ thể. Sau đây là thực đơn giảm cân mà bạn nên tham khảo:",
      },
      {
        title: "Lưu ý dành cho người tập gym để giảm cân",
        image: "",
        content: `Người tập gym sẽ có vài lưu ý cần quan tâm để thực hiện mục đích giảm cân được dễ dàng hơn, cụ thể như sau:
        Xác định đúng mục tiêu tập luyện.
        Sắp xếp lịch tập hợp lý.
        Khởi động kỹ trước khi bắt đầu tập gym.
        Chọn mức độ tập luyện vừa với thể lực.
        Trang phục tập gym thoải mái, thoáng mát, phù hợp.
        Chế độ ăn uống phải khoa học,...`,
      },
    ],
  },
    {
      name: "NGƯỜI GẦY CÓ NÊN TẬP GYM KHÔNG? CÁCH TẬP GYM CHUẨN ĐỂ TĂNG CÂN",
      subTitle: "Rau củ quả và các loại hạt là thực phẩm rất tốt cho sức khỏe",
      image:
        "https://medlatec.vn/ImagePath/images/20201212/20201212_nguoi-gay-co-nen-tap-gym-hay-khong-la-thac-mac-cua-nhieu-nguoi.jpg",
      content: [
        {
          title: "Phương pháp tập gym hiệu quả để tăng cân",
          image: "",
          content: `Nếu đã biết được câu trả lời người gầy có nên tập gym thì bạn cần bỏ ra thời gian để lập một kế hoạch tập luyện cụ thể cũng như tìm hiểu tất tần tật những phương pháp để quá trình tập gym diễn ra đạt hiệu quả cao.
          2.1. Chọn bài tập phù hợp
          Trong gym có rất nhiều bài tập cho từng mục đích khác nhau, khi bắt đầu cần lựa chọn những bài tập vừa phải, không quá nhẹ cũng không quá nặng. Khi đã quen với cường độ luyện tập như thế thì bạn hãy từ từ tăng level lên, không nên quá nóng vội tránh trường hợp ảnh hưởng đến sức khỏe xương khớp và sụt cân hơn ban đầu.
          \n 2.2. Thực hiện động tác đúng cách
          Trước khi tập một động tác mới, chúng tôi khuyên bạn hãy nhờ sự hướng dẫn của các huấn luyện viên tại phòng gym để thực hiện một cách chính xác nhất. Khi tập luyện, mỗi động tác bạn nên làm dứt khoát, không ngập ngừng, phải tập thành thạo, quen dần rồi mới bắt đầu chuyển sang động tác khác.
          Thời gian cho một bài tập tầm 30 phút đến 1 tiếng là hợp lý, tránh tập luyện quá độ gây nên tình trạng thiếu hụt calo, giảm năng lượng hoạt động trong một ngày.
          Nếu sắp xếp được thì bạn nên tập luyện từ lúc 3 giờ chiều để việc tăng cân diễn ra hiệu quả hơn. (Tùy theo cách bạn tập luyện như thế nào nữa).
          Chú ý giãn cơ trước và sau buổi tập để giúp cơ kịp thời phục hồi, cố gắng dành ra 15 phút cho việc này.
          Tập luyện không bỏ ngang hoặc ngắt quãng giữa chừng. Việc bạn nghỉ ngang như vậy sẽ tạo cảm giác chán nản, dễ gây ra tình trạng bỏ tập.
          2.3. Chế độ bổ sung dinh dưỡng
  Ăn uống đầy đủ dưỡng chất quyết định rất nhiều đến việc tăng cân cho người gầy. Chất dinh dưỡng giúp cơ thể hấp thu thêm nhiều năng lượng, bạn nên cung cấp nhiều đạm qua các loại thực phẩm như: ức gà, thịt bò, hải sản, trứng, rau xanh, các loại đậu,...
  Người tập gym thường có thói quen chia thực đơn thành nhiều buổi nhỏ, việc ăn như vậy sẽ giúp quá trình tiêu hóa diễn ra tích cực hơn. Hãy quan tâm đến chế độ ăn uống của bản thân, tránh tập luyện quá độ dẫn đến mệt mỏi chán ăn, thì lúc đấy mọi công sức bạn bỏ ra đều trở nên vô nghĩa.
  2.4. Chế độ nghỉ ngơi khoa học
  Một ngày quy định con người chỉ nên bỏ ra 8 tiếng để ngủ, vì việc thiếu ngủ sẽ gây mệt mỏi ảnh hưởng đến quá trình tập luyện. Bạn nên dành thời gian để nghỉ ngơi sau mỗi bài tập, điều này cải thiện rất nhiều đến kết quả bài tập.
  2.5. Hít thở
  Có thể nói đây chính là yếu tố quan trọng quyết định đến hiệu quả bài tập. Phải đảm bảo rằng việc hít thở phải đúng cách, hít vào bằng mũi và thở ra bằng miệng trong suốt quá trình tập gym.`,
        },
        {
          title: "Người gầy tập gym sẽ mang lại hiệu quả như thế nào?",
          image: "",
          content: `Gầy khiến cơ thể bạn khi nhìn vào cảm thấy thiếu sức sống cho dù bạn có đang khỏe mạnh đến mức nào, việc tăng cân nhờ tập gym sẽ giúp bạn có cân nặng vừa ý, ngoài ra còn giúp xua tan mệt mỏi, xả stress, thải mọi độc tố trong cơ thế, giúp giấc ngủ đi sâu hơn,...
          Người gầy tập gym sẽ mang đến nhiều tác dụng tốt như:
          Cơ hội tăng cân hiếm thấy.
          Ăn uống ngon hơn bình thường, ngủ sâu đủ giấc.
          Quá trình chuyển hóa chất diễn ra tốt hơn.
          Tăng cân mà không lo dư mỡ thừa, phát béo.
          Body dần trở nên nóng bỏng, thu hút.
          Sức khỏe cải thiện, tràn đầy năng lượng tích cực.
          Tinh thần lúc nào cũng thoải mái, dễ chịu, lạc quan hơn.`,
        },
        {
          title: "Lưu ý cho người gầy tập gym để tăng cân",
          image: "",
          content: `Trước khi tập luyện không nên nhịn đói, để bụng rỗng, hoặc ăn quá no.
          Dành ra thời gian hợp lý để nghỉ ngơi giữa các hiệp.
          Không nên tắm ngay sau khi tập vì các tuyến mồ hôi lúc này đang diễn ra tích cực, lỗ chân lông giãn nở, việc tắm lúc cơ thể đang nóng vì đốt cháy năng lượng, khi đó nước lạnh đột ngột sẽ khiến chúng ta dễ bệnh hoặc dẫn đến đột quỵ, khuyên nên tắm bằng nước ấm để thư giãn.
          Không nên ăn ngay sau khi tập, cơ thể mệt mỏi khiến cho thức ăn khó tiêu hơn bình thường, khuyên bạn nên nghỉ ngơi mỗi khi tập luyện xong.
          Ngủ đầy đủ 8 tiếng mỗi ngày để có sức, đầu óc tỉnh táo.
          Không luyện tập quá độ, xếp lịch tập một cách hợp lý, xen kẽ ngày nghỉ để cơ bắp kịp thời phục hồi và phát triển.`,
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
    console.log("created food");
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
    console.log("created exercise");
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
    console.log("created news");
  });
  await Promise.all(newsUpload);
};
