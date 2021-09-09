interface SubTitle {
  name: string;
  percentage: string;
}
export default interface ITreeViewProps {
  title?: string;
  subtitle?: {
    name: string;
    beginnerPercentage: string;
    intermediatePercentage: string;
    advancePercentage: string;
  }[];
  color?: string;
  loading?: boolean;
}
// export default interface ITreeArray {
//   arrayList: [ITreeViewProps];
// }
