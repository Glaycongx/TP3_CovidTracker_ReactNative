import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import * as Font from "expo-font";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import api from "../../services/api";
import formatNumber from "../../utils/formatNumber";

const Home = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const [listAllCountries, setListAllCountriess] = useState({});
  const [listCountries, setListCountries] = useState([]);
  const [listFilterCountries, setListFilterCountries] = useState([]);

  useEffect(() => {
    api.get("countries").then((response) => {
      setListCountries(response.data);
      setListFilterCountries(response.data);
    });

    api.get("all").then((response) => {
      setListAllCountriess(response.data);
    });

    setSearch("");
  }, []);

  const handleFilterCountry = (text) => {
    const filtered = listCountries.filter((item) =>
      item.country.toLowerCase().includes(text.toLowerCase())
    );
    setSearch(text);
    setListFilterCountries(filtered);
  };

  const handleClearFilter = () => {
    setSearch("");
    setListFilterCountries(listCountries);
  };

  const handleNavigateToCountry = (country) => {
    handleClearFilter();
    navigation.navigate("Detail", { country });
  };

  const listCases = (type, total, today) => {
    let icon, title, subtitle;
    switch (type) {
      case "cases":
        icon = (
          <FontAwesome5
            name="heartbeat"
            solid
            style={styles.iconCases}
            size={20}
          />
        );
        title = "textCases";
        subtitle = "textNewCases";
        break;
      case "death":
        icon = (
          <FontAwesome5
            name="heart-broken"
            style={styles.iconDeath}
            size={20}
          />
        );
        title = "textDeath";
        subtitle = "textNewDeath";
        break;
      default:
        icon = (
          <FontAwesome5
            name="heart"
            solid
            style={styles.iconHealthy}
            size={20}
          />
        );
        title = "textHealthy";
        subtitle = "textNewHealthy";
        break;
    }

    return (
      <View style={styles.cardCol}>
        <View style={styles.cardColItem}>{icon}</View>
        <View style={styles.cardColItem}>
          <Text style={styles[title]}>{formatNumber(total)}</Text>
          <Text style={styles[subtitle]}>(+{formatNumber(today)})</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.search}
          placeholder="Buscar pelo nome do país"
          placeholderTextColor="gray"
          onChangeText={(text) => handleFilterCountry(text)}
          defaultValue={search}
        />
        <Feather name="search" color="gray" size={24} />
      </View>
      {!!listFilterCountries.length ? (
        <>
          {!!Object.keys(listAllCountries).length && !search && (
            <View style={styles.card}>
              <View style={styles.cardTitle}>
                <FontAwesome5
                  name="globe"
                  solid
                  style={styles.globe}
                  size={20}
                />
                <Text style={styles.cardTitleText}>Global</Text>
              </View>
              <View style={styles.cardBody}>
                {listCases(
                  "cases",
                  listAllCountries.cases,
                  listAllCountries.todayCases
                )}
                {listCases(
                  "death",
                  listAllCountries.deaths,
                  listAllCountries.todayDeaths
                )}
                {listCases(
                  "healthy",
                  listAllCountries.recovered,
                  listAllCountries.todayRecovered
                )}
              </View>
            </View>
          )}

          <FlatList
            data={listFilterCountries}
            keyboardShouldPersistTaps={"handled"}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleNavigateToCountry(item.country)}
                key={`country_${item._id}`}
              >
                <View style={styles.card}>
                  <View style={styles.cardTitle}>
                    <Image
                      source={{ uri: `${item.countryInfo.flag}` }}
                      style={styles.cardTitleFlag}
                    />
                    <Text style={styles.cardTitleText}>{item.country}</Text>
                    <Text style={styles.textContinent}>({item.continent})</Text>
                  </View>
                  <View style={styles.cardBody}>
                    {listCases("cases", item.cases, item.todayCases)}
                    {listCases("death", item.deaths, item.todayDeaths)}
                    {listCases("healthy", item.recovered, item.todayRecovered)}
                  </View>
                </View>
              </TouchableOpacity>
            )}
          />
        </>
      ) : (
        <Text style={styles.notFound}>Sorry.. Nenhum país encontrado.</Text>
      )}
    </View>
  );
};

export default Home;
