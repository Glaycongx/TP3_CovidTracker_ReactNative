import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 5,
    flexDirection: "column",
  },
  searchBar: {
    margin: 5,
    padding: 5,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#dcdce6",
    marginBottom: 20,
  },
  search: {
    flex: 1,
    alignItems: "center",
    borderRadius: 8,
    fontSize: 14,
    marginLeft: 10,
    height: 40,
  },
  card: {
    flexDirection: "column",
    minHeight: 60,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  cardTitle: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
  cardTitleFlag: {
    marginRight: 10,
    width: 40,
    height: 30,
  },
  globe: {
    marginRight: 10,
  },
  cardTitleText: {
    fontSize: 19,
    fontWeight: "700",
  },
  cardBody: {
    flexDirection: "row",
  },
  cardCol: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    maxWidth: 120,
  },
  cardColItem: {
    margin: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  iconCases: {
    color: "#ff8e01",
  },
  textCases: {
    color: "#ff8e01",
    fontSize: 14,
  },
  textNewCases: {
    color: "#ff8e01",
    fontStyle: "italic",
    fontSize: 10,
  },
  iconDeath: {
    color: "#333333",
  },
  textDeath: {
    color: "#333333",
    fontSize: 14,
  },
  textNewDeath: {
    color: "#333333",
    fontStyle: "italic",
    fontSize: 10,
  },
  iconHealthy: {
    color: "#d32f2e",
  },
  textHealthy: {
    color: "#d32f2e",
    fontSize: 14,
  },
  textNewHealthy: {
    color: "#d32f2e",
    fontStyle: "italic",
    fontSize: 10,
  },
  textContinent: {
    fontStyle: "italic",
    fontSize: 10,
    padding: 5,
    justifyContent: "center",
  },
  notFound: {
    flex: 1,
    color: "gray",
    fontSize: 18,
    fontWeight: "700",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default styles;
