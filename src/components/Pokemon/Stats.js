import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { capitalize, map } from "lodash";

export default function Stats(props) {
  const { stats, colorByType } = props;
  const maxStat = 255;
  const styles = StyleSheet.create({
    content: {
      paddingHorizontal: 20,
      marginTop: 5,
      marginBottom: 80,
    },
    title: {
      fontWeight: "bold",
      fontSize: 20,
      paddingBottom: 5,
    },
    block: {
      flexDirection: "row",
      paddingVertical: 5,
    },
    blockTitle: {
      width: "30%",
    },
    statName: {
      fontSize: 12,
      color: "#6b6b6b",
    },
    blockInfo: {
      width: "70%",
      flexDirection: "row",
      alignItems: "center",
    },
    number: {
      width: "12%",
      fontSize: 12,
      color: colorByType,
      fontWeight: "bold",
    },
    line: {
      width: "88%",
      position: "relative",
    },
    bgBar: {
      backgroundColor: colorByType,
      opacity: 0.4,
      width: "100%",
      height: 5,
      borderRadius: 20,
      overflow: "hidden",
    },
    bar: {
      backgroundColor: colorByType,
      height: 5,
      borderRadius: 20,
      position: "absolute",
    },
  });

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.number}>{item.base_stat}</Text>

            <View style={styles.line}>
              <View style={styles.bgBar}></View>
              <View
                style={{
                  ...styles.bar,
                  width: `${(item.base_stat / maxStat) * 100}%`,
                }}
              />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
