import React from 'react'
import { Flex, Heading, Button } from '@adobe/react-spectrum'

function Library() {
    function disconnect() {
        localStorage.removeItem('token')
        setTimeout(() => {
            window.location.href = '/login'
        }, 100)
    }

    return (
        <Flex
            direction="row"
            alignItems="center"
            justifyContent="center"
            alignContent="center"
            gap="size-100"
        >
            <Flex
                direction="row"
                alignItems="end"
                justifyContent="end"
                gap="size-100"
            >
                <Button onPress={disconnect}>Log out</Button>
            </Flex>
            <Heading level={3}>Library</Heading>
        </Flex>
    )
}

export default Library
