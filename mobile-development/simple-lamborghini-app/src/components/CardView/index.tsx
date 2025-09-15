import React, { useEffect, useState } from "react";
import { View, Text, Button, Modal, Image, TouchableOpacity } from "react-native";

import Logo from "../../../assets/logo.png";
import { styles } from "./style";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);
  const [showModal, setShowModal] = useState(false); // 👈 state to control popup

  useEffect(() => {
    (async () => {
      await loadCarData(8, setCarData);
    })();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => handlePreviousItem(carData, setCarData)}
      />
      <Text style={styles.priceLabel}> {carData?.price}</Text>
      <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => handleNextItem(carData, setCarData)}
      />
    </View>
  );

  const renderConfirmPopup = () => {
    
  }

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}

      <Divider />
      {renderCarDetails()}
      {renderCarImage()}

      <Divider />
      <BuyButton onPress={() => setShowModal(true)}/>
      {renderPriceControls()}
      {/* Popup Modal */}
      <Modal
        visible={showModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowModal(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              width: 300,
              padding: 20,
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Confirm Purchase
            </Text>
            <Text style={{ marginVertical: 10 }}>
              Do you want to buy {carData?.carName} for {carData?.price}?
            </Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={() => setShowModal(false)}
              >
                <Text style={{ color: "red" }}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{ marginHorizontal: 10 }}
                onPress={() => {
                  // handle purchase logic here
                  setShowModal(false);
                }}
              >
                <Text style={{ color: "green" }}>Confirm</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
