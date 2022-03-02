import React, {useEffect, useState} from "react";
import axios from 'axios';
import {
    View,
    Flex,
    Form,
    TextField,
    Text,
    Heading,
    Image,
    ActionButton,
} from '@adobe/react-spectrum'

function App() {
    const dataContent = {
        name: 'soul',
        company: 'naker',
        email: 'blabla@gmail.com',
        number: '0121548244',
        token: '@@@@@à',
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    function createProfil() {
        axios
            .post('/profil', dataContent)
            .then((data) => {
                localStorage.setItem('token', data.token)
                setUser(data.token)
            })
            .catch((error) => console.log(error))
    }

    return (
        user && (
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
                                    <Image
                                        src={require('../chiffumi_logo.png')}
                                        alt="Logo chiffumi"
                                    />
                                    <Heading level={1}>Login</Heading>

                                    <TextField
                                        width="100%"
                                        key="username"
                                        placeholder="username"
                                        value={username}
                                        onChange={(v) => handleUsername(v)}
                                    />

                                    <TextField
                                        width="100%"
                                        key="password"
                                        placeholder="password"
                                        type="password"
                                        value={password}
                                        onChange={(v) => handlePassowrd(v)}
                                    />
                                </Flex>
                                <ActionButton onPress={createProfil}>
                                    <Flex direction="row" gap="size-600">
                                        <Text> create </Text>
                                    </Flex>
                                </ActionButton>
                            </Form>
                        </div>
                    </Flex>
                </View>
            </View>
        )
    )
}

export default App;