import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Feather as Icon } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import styles from "./styles";
import api from "../../services/api";
import formatNumber from "../../utils/formatNumber";

const Detail = () => {
  const [country, setCountry] = useState({});
  const navigation = useNavigation();
  const route = useRoute();

  useEffect(() => {
    if (!!route.params.country) {
      api.get(`countries/${route.params.country}`).then((response) => {
        setCountry(response.data);
      });
    }
  }, []);

  const handleNavigateBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleNavigateBack} style={styles.backArrow}>
        <Icon name="arrow-left" color="gray" size={26} />
      </TouchableOpacity>
      {!!Object.keys(country).length && (
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Image
              source={{ uri: `${country.countryInfo["flag"]}` }}
              style={styles.flag}
            />
            <Text style={styles.title}>{country.country}</Text>
          </View>
          <View style={styles.cardBody}>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>Continente: {country.continent}</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>População: {formatNumber(country.population)}</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>Total de casos: {formatNumber(country.cases)}</Text>
              </View>
              <View style={styles.item}>
                <Text>(+{formatNumber(country.todayCases)})</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>Total de mortes: {formatNumber(country.deaths)}</Text>
              </View>
              <View style={styles.item}>
                <Text>(+{formatNumber(country.todayDeaths)})</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>
                  Total de recuperados: {formatNumber(country.recovered)}
                </Text>
              </View>
              <View style={styles.item}>
                <Text>(+{formatNumber(country.todayRecovered)})</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>Ativos: {formatNumber(country.active)}</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>Críticos: {formatNumber(country.critical)}</Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>
                  Casos/mi: {formatNumber(country.casesPerOneMillion)}
                </Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>
                  Mortes/mi: {formatNumber(country.deathsPerOneMillion)}
                </Text>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.item}>
                <Text>
                  Testes/mi: {formatNumber(country.testsPerOneMillion)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default Detail;
