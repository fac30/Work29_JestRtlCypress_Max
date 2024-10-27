import { Button, Container, Group, Text, Title } from "@mantine/core";
import Link from "next/link";

export default function Home() {
  return (
    <Container>
      <Title align="center" mb="md" mt="xl">
        Welcome to Our Coding Exercises
      </Title>
      <Text align="center" size="lg" c="red" mb="lg">
        Choose an exercise below to get started!
      </Text>
      <Group position="center">
        <Link href="/exercise-one" passHref>
          <Text
            component="a"
            size="lg"
            variant="link"
            weight={500}
            style={{ textDecoration: "none", color: "#1c7ed6" }}
            sx={{
              "&:hover": { color: "#1971c2", textDecoration: "underline" },
            }}
          >
            Go to Exercise One
          </Text>
        </Link>
        <Link href="/exercise-two" passHref>
          <Text
            component="a"
            size="lg"
            variant="link"
            weight={500}
            style={{ textDecoration: "none", color: "#1c7ed6" }}
            sx={{
              "&:hover": { color: "#1971c2", textDecoration: "underline" },
            }}
          >
            Go to Exercise Two
          </Text>
        </Link>
      </Group>
    </Container>
  );
}
