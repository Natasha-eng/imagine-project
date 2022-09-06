import avatar1 from "./../assets/userAvatar/george.png";
import avatar2 from "./../assets/userAvatar/peggy.png";
import avatar3 from "./../assets/userAvatar/alice.png";
import avatar4 from "./../assets/userAvatar/timothy.png";
import work1 from "./../assets/artWorksIMg/forest.png";
import work2 from "./../assets/artWorksIMg/still.png";
import work3 from "./../assets/artWorksIMg/surrounded.png";
import work4 from "./../assets/artWorksIMg/mountain.png";

export interface IUserData {
  userName: string;
  avatar: string;
  workName: string;
  workSrc: string;
}

export interface IArtDate {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}

export const artData = [
  { id: 1, label: "sculpture", value: "Sculpture", checked: false },
  {
    id: 2,
    label: "architecture",
    value: "Architecture",
    checked: false,
  },
  {
    id: 3,
    label: "landscape",
    value: "Landscape",
    checked: false,
  },
  {
    id: 4,
    label: "graphicArts",
    value: "Graphic Arts",
    checked: false,
  },
  {
    id: 5,
    label: "portrait",
    value: "Portrait",
    checked: false,
  },
];

export const usersData = [
  {
    userName: "George Dillan",
    avatar: avatar1,
    workName: "Forest silence",
    workSrc: work1,
    category: "Landscape",
  },
  {
    userName: "Peggy Wood",
    avatar: avatar2,
    workName: "Still life V",
    workSrc: work2,
    category: "Graphic Arts",
  },
  {
    userName: "Alice Gordan",
    avatar: avatar3,
    workName: "Surrounded",
    workSrc: work3,
    category: "Architecture",
  },
  {
    userName: "Timothy Taylor",
    avatar: avatar4,
    workName: "Mountain landscape",
    workSrc: work4,
    category: "Landscape",
  },
  {
    userName: "George Dillan",
    avatar: avatar1,
    workName: "Forest silence",
    workSrc: work1,
    category: "Landscape",
  },
  {
    userName: "George Dillan",
    avatar: avatar2,
    workName: "Still life V",
    workSrc: work2,
    category: "Graphic Arts",
  },
  {
    userName: "George Dillan",
    avatar: avatar3,
    workName: "Surrounded",
    workSrc: work3,
    category: "Architecture",
  },
  {
    userName: "George Dillan",
    avatar: avatar4,
    workName: "Mountain landscape",
    workSrc: work4,
    category: "Landscape",
  },
  {
    userName: "Alice Gordan",
    avatar: avatar1,
    workName: "Forest silence",
    workSrc: work1,
    category: "Landscape",
  },
  {
    userName: "Alice Gordan",
    avatar: avatar2,
    workName: "Still life V",
    workSrc: work2,
    category: "Graphic Arts",
  },
  {
    userName: "Alice Gordan",
    avatar: avatar3,
    workName: "Surrounded",
    workSrc: work3,
    category: "Architecture",
  },
  {
    userName: "Alice Gordan",
    avatar: avatar4,
    workName: "Mountain landscape",
    workSrc: work4,
    category: "Landscape",
  },
];
