import { Feature, Icon } from 'vx-front'
import {
    Space,
    Stack,
    Title,
    Group,
    Image,
    Text,
    Button,
    Blockquote,
    Code,
    useMantineTheme,
} from '@mantine/core'
import vixenLogo from '/vixen.svg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import mantineLogo from './assets/mantine.svg'
import './index.css'
import { useCounter } from '@mantine/hooks'

function Main() {
    const theme = useMantineTheme()
    const [count, handlers] = useCounter(0, { min: 0, max: 10 })
    const task = Feature.Use.Task()
    const data = Feature.Use.Data()

    return (
        <Stack h="100%" justify="center" align="center">
            <Stack align="center">
                <Title order={2}>
                    {data.get('title', { name: 'feature_title' })}
                </Title>
                <Space h="xl" />
                <Group justify="center">
                    <Image
                        src={vixenLogo}
                        className="logo vixen"
                        onClick={() => {
                            task.run('firefox', [
                                'https://vixen-shell.github.io/features/intro',
                            ])
                        }}
                    />
                    <Image
                        src={viteLogo}
                        className="logo vite"
                        onClick={() => {
                            task.run('firefox', ['https://vitejs.dev'])
                        }}
                    />
                    <Image
                        src={reactLogo}
                        className="logo react"
                        onClick={() => {
                            task.run('firefox', ['https://react.dev'])
                        }}
                    />
                    <Image
                        src={mantineLogo}
                        className="logo mantine"
                        onClick={() => {
                            task.run('firefox', ['https://mantine.dev'])
                        }}
                    />
                    <div
                        className="logo phosphor"
                        onClick={() => {
                            task.run('firefox', ['https://phosphoricons.com'])
                        }}
                    >
                        <Icon
                            iconName="phosphor-logo"
                            size={48}
                            iconStyle="light"
                        />
                    </div>
                </Group>
            </Stack>
            <Stack justify="center" align="center">
                <Text>Count: {count}</Text>
                <Group justify="center">
                    <Button onClick={handlers.increment}>Increment</Button>
                    <Button onClick={handlers.decrement}>Decrement</Button>
                    <Button onClick={handlers.reset}>Reset</Button>
                    <Button onClick={() => handlers.set(5)}>Set 5</Button>
                </Group>
                <Blockquote
                    mt="xl"
                    icon={
                        <Icon
                            iconName="info"
                            size={32}
                            color={theme.primaryColor}
                        />
                    }
                >
                    You have just created a new feature for Vixen Shell.
                    <br />
                    All you have to do now is implement the different contents
                    of this feature.
                    <br />
                    Edit{' '}
                    <Code
                        style={{ fontSize: '16px' }}
                        color="var(--mantine-color-teal-light)"
                        c={theme.primaryColor}
                    >
                        src/feature/Main/index.jsx
                    </Code>{' '}
                    and save to test Vite HMR
                    <br />
                    <br />
                    Happy developing!
                </Blockquote>
            </Stack>
            <Text c="#888">
                Click on the Vixen, Vite, React, Mantine and Phosphor logos to
                learn more
            </Text>
        </Stack>
    )
}

export default Main
