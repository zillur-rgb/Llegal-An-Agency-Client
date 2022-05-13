import { Body, Container, Text } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container maxW="1170px" marginX="auto">
      <Navbar />
    </Container>
  );
}
