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

const data = {
    name: '',
    company: '',
    email: '',
    number: '',
    token: '',
}

function Profil() {
    const [playload, setPlayload] = useState(data)
    // const [user, setUser] = useState('')

    function createProfil() {
        axios
            .post('/register', dataContent)
            .then((data) => {
                localStorage.setItem('token', data.token)
                setUser(data.token)
            })
            .catch((error) => console.log(error))
        console.log('here', playload)
    }

    return (
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
                                    type="company"
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
