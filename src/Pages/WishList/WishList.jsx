import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WishList = ({ data, habndleDelete }) => {
    const { email, id, title, blogPpic, shorDes, _id } = data
    return (
        <div>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={blogPpic}
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>{title}</Heading>

                        <Text py='2'>
                            {shorDes}
                        </Text>
                    </CardBody>

                    <CardFooter className="space-x-2">
                        <Button variant='solid' colorScheme='blue'>
                           <Link to={`/blog-details/${id}`}>Details</Link>
                        </Button>
                        <Button onClick={() =>habndleDelete(_id)} variant='solid' colorScheme='red'>
                            Remove
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </div>
    )
}


export default WishList