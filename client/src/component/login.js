import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {
    View,
    Flex,
    Form,
    TextField,
    Text,
    Heading,
    ActionButton,
} from '@adobe/react-spectrum'

const dataContent = {
    email: '',
    password: '',
}

function Login() {
    const [playload, setPlayload] = useState(dataContent)
    const [user, setUser] = useState()

    function createProfil() {
        axios
            .post('/login', playload)
            .then((data) => {
                localStorage.setItem('token', data?.data?.access_token)
                setUser(data?.data?.access_token)
            })
            .catch((error) => console.log(error))
    }

    function goToLibrary() {
        window.location.href = '/library'
    }

    return user ? (
        goToLibrary()
    ) : (
        <View backgroundColor="gray-200" width="100%" height="100%">
            <View padding="size-3000">
                <Flex direction="column" alignItems="center">
                    <div className="align-height">
                        <Form width="size-3000" height="100%">
                            <Flex
                                direction="column"
                                alignItems="center"
                                justifyContent="center"
                                alignContent="center"
                                gap="size-200"
                            >
                                <Heading level={1}>Login</Heading>
                                <TextField
                                    width="50%"
                                    key="email"
                                    placeholder="email"
                                    type="email"
                                    value={playload.email}
                                    onChange={(v) =>
                                        setPlayload({
                                            ...playload,
                                            email: v,
                                        })
                                    }
                                />

                                <TextField
                                    width="50%"
                                    key="password"
                                    placeholder="password"
                                    type="password"
                                    value={playload.password}
                                    onChange={(v) =>
                                        setPlayload({
                                            ...playload,
                                            password: v,
                                        })
                                    }
                                />
                            </Flex>
                            <ActionButton onPress={createProfil}>
                                <Flex direction="row" gap="size-600">
                                    <Text> Login </Text>
                                </Flex>
                            </ActionButton>
                        </Form>
                    </div>
                </Flex>
            </View>
        </View>
    )
}

export default Login
