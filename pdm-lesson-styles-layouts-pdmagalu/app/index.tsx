import { View, Text, TextInput, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Link, useRouter } from "expo-router";
import FullScreen from "@/components/containers/FullScreen";
import FormInput from "@/components/form/FormInput";
import Card from "@/components/containers/Card";
import FormButton from "@/components/form/FormButton";
import { Spacing } from "@/consts/spacing";
import { Colors } from "@/consts/colors";

export default function index() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    router.push("/home");
  };

  return (
    <FullScreen>
      <Card>
        <Text style={styles.logo}>PDMagalu</Text>

        <FormInput
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
        <FormInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <FormButton onPress={handleLogin} title="Login!" />

        <Link style={styles.registerLink} href="/register">
          Novo por aqui? Registre-se!
        </Link>
      </Card>
    </FullScreen>
  );
}

const styles = StyleSheet.create({
  registerLink: {
    marginTop: Spacing.md,
    fontSize: 12,
    textAlign: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.primary,
    textAlign: "center",
  },
});
