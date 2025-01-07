export interface BusHeaderModel {
  title: string;
  subtitle: string;
  content: {
    from: string;
    to: string;
    alias: string;
  };
}
