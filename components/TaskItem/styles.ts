import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  item: {
    width: "100%",
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  square: { backgroundColor: "#55BCF6" },
  text: {
    maxWidth: "75%",
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: "#55BCF6",
    borderRadius: 5,
    borderWidth: 2,
  },
  icons: { flexDirection: "row" },
});

export default styles;
