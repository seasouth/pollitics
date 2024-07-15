import Image from 'next/image';
import classes from './navigation.module.css';
import { Autocomplete, Container, Group, Burger, rem, Title } from '@mantine/core';
import { IconSearch } from '@tabler/icons-react';

export default function Header() {
    return (
        <header className={classes.header}>
            <Container size="md" className={classes.inner}>
                <Group>
                    <Image
                        src="/ericlemerdy-The-eagle-vision.svg"
                        alt="Eagle"
                        width={35}
                        height={35}
                        priority
                    />
                    <Title className={classes.title} order={3}>
                        Pollitics
                    </Title>
                </Group>

                <Group>
                    <Autocomplete
                        className={classes.search}
                        placeholder="Search"
                        leftSection={<IconSearch style={{ width: rem(16), height: rem(16) }} stroke={1.5} />}
                        visibleFrom="xs"
                    />
                </Group>
            </Container>
        </header>
    )
}