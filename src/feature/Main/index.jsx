import './index.css'

import { Feature } from '@vx-feature'
import { Stack, Space, Group } from '@vx-components/Mantine/Layouts'
import {
    Title,
    Text,
    Blockquote,
    Code,
} from '@vx-components/Mantine/Typography'
import { Image } from '@vx-components/Mantine/Data'
import { Icon } from '@vx-components/Vixen'
import { Button } from '@vx-components/Mantine/Buttons'
import { ScrollArea } from '@vx-components/Mantine/Various'
import { useTheme } from '@vx-hooks/Mantine/Ui'
import { useCounter } from '@vx-hooks/Mantine/State'

import vixenLogo from '/vixen.svg'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import mantineLogo from './assets/mantine.svg'

function Main() {
    const theme = useTheme()
    const task = Feature.Use.Task()
    const data = Feature.Use.Data()

    const [count, handlers] = useCounter(0, { min: 0, max: 10 })

    return (
        <ScrollArea h="100%" p="8%">
            <Stack h="100%" justify="flex-start" align="center">
                <Stack align="center">
                    <Title ta="center" order={2}>
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
                                task.run('firefox', [
                                    'https://phosphoricons.com',
                                ])
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
                        ml={20}
                        mr={20}
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
                        All you have to do now is implement the different
                        contents of this feature.
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
                    Click on the Vixen, Vite, React, Mantine and Phosphor logos
                    to learn more
                </Text>
            </Stack>
        </ScrollArea>
    )
}

export default Main
