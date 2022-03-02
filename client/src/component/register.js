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
    name: '',
    company: '',
    email: '',
    number: '',
    password: '',
}

function Profil() {
    const [playload, setPlayload] = useState(dataContent)
    const [data, setRegistered] = useState()

    function createProfil() {
        axios
            .post('/register', playload)
            .then((data) => {
                console.log('data', data?.data?.registed)
                setRegistered(data?.data?.registed)
            })
            .catch((error) => console.log(error))
    }

    function goToLoginPage() {
        window.location.href = '/login'
    }

    return data ? (
        goToLoginPage()
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
                                <Heading level={1}>Create a profil</Heading>

                                <TextField
                                    width="50%"
                                    key="name"
                                    placeholder="name"
                                    value={playload.name}
                                    onChange={(v) =>
                                        setPlayload({ ...playload, name: v })
                                    }
                                />

                                <TextField
                                    width="50%"
                                    key="company"
                                    placeholder="company"
                                    value={playload.company}
                                    onChange={(v) =>
                                        setPlayload({
                                            ...playload,
                                            company: v,
                                        })
                                    }
                                />
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
                                    key="number"
                                    placeholder="number"
                                    type="number"
                                    value={playload.number}
                                    onChange={(v) =>
                                        setPlayload({
                                            ...playload,
                                            number: v,
                                        })
                                    }
                                />
                                <TextField
                                    width="50%"
                                    key="poassword"
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
                                    <Text> Register </Text>
                                </Flex>
                            </ActionButton>
                        </Form>
                    </div>
                </Flex>
            </View>
        </View>
    )
}

export default Profil
