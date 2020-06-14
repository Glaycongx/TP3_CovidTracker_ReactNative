import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 10,
  },
  backArrow: {
    marginLeft: 5,
  },
  card: {
    flex: 1,
    marginTop: 20,
  },
  cardHeader: {
    alignItems: "center",
  },
  cardBody: {
    padding: 10,
  },
  listItem: {
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
  },
  item: {
    paddingTop: 5,
    paddingBottom: 5,
  },
  flag: {
    alignItems: "center",
    width: 200,
    height: 130,
    marginBottom: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: "700",
  },
});

export default styles;
