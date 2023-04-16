import React from 'react'
import {
  Heading,
  Avatar,
  Box,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Container,
} from '@chakra-ui/react';

const Team = () => {
  return (
    <>
    <Flex  padding="3.5rem">
    <Container   margin="20px" py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://lh3.googleusercontent.com/fife/APg5EOZl2oqwpETGcHrkvj9F24GlyswUIwF3YCFSoauH2ILDCX0lYf3TFxM_EQQcwOAfeoTLOolC0N0EngnokrAoLA1-MfrmhvP_mIcYPc38-Y_Z_4FVQ6xChMFSdwOB4ooskR9ZpbPSJufXt51KnLJKfljKZ9eBVQr5M3uJTWw6e9vxKtcUb3RniiNfw5Wjpz5YuxIkFoUbGXq3RlO4xt7ACi6nnlkr9R_SIzARESc6RIuLacRowCTho8H8l3VvqeMa_6vRljw630IAeQfEEwBDOmkVxlHucjPXXiNj2rpNxH4I_B3_Vj2-A7XXgrSvl5nmSEsChnRREBj9eKrs9QNAuPFOLL0CZ57FbRfrl6eowrTpYDJBemN1NrSmx4OJXV-tx35BGgGOIsx_0sD0IuwyDq28OINH5trZyDBkv8Qpi5UZDPHLTv68TafOVpKLuPv5sDQgDQOUs1ihPieDad1eWuWTLmduZv67MbCYSbUgRUPk0OvBUXYVx0p6pTMGIlbXlGK47LLSvauZjY33NHU1a8cWmJTFyR97EUo04facElqAy-CsUmLaWBBA9xr4AKOq_fUtGt4Cj2cJEhAzeaeoUFbgUT0ibA1PY0VDbJrfO_7UG_IJlwEuCMGI4gk37tB8V3CsrCGwWQ0GvJ8Sw4Ce6qgbM3ooe_RsZa8mer2b8llDRoGjAieWcrnurWwzPm5rFlhjs2go5k-sfNDvHv50m6Lx0_SfY4R0C0wUTSNOEjFlaU5lCZu2NujdXf3qddP4n8xfD6UNqkUyL4F85YkGYpLZ44qlREfWdBEWb-VMQNytXvQ5ZlZXMz4_lS_u6Coyo_4oyPMHczetqOIeO37RhmZJFhVxWoPHV8lp1l-7UmtRIPHpGcoWT2G-_t1qHfT4wAR7FQBsHvdRR7Oxqi4kQi5c5IInB2se39QRerv64XlRfAnzuJMQkkNQdhUIh2vL1FllcaURH6UV-ykEFplusNLcQnUQBBQEodnPrmL4hSo9fhxVcBW6kXbwaot0GGC0ETrzLRIR3PnjtN5rYPpwmI5IeqbDR-Nz53NjjT2xzxkf5olSRmkHsywqeMZm8LKdOLTbm7ou7GFQ4iYSrdCPsdXClX5gff7WTI2HhuODFHWv4hYjr-mH7P3eS9T4jNo6t4H5ILkHW_eG_dGnV_ErPiWb3SRx6graCmN_NORKjezWVVTST_n8qv0HYAkH682BUHs_c7k2Fm0qnM4dAYU_2ekpb75uz62qMoNe87VDHdR_E2ut26B7T2opbOhcXEGbugQOQbvBSitbRZiLQ0U3ZprOUooMfCZqXLi5VVtK-3mLlJZYKqB0y3-Bowz7u9XyOm7vTl9w3FC04l2N9Y4B7TefCynrMVpCTPdLFWIJRLWAceuCuoF_V69Xv-ql7rWFyj0uMer-18CaCfALf0zCUBM-9-iFBb6oXKO-_G_yLBnw1Y3lPXvNZptRfjRV3aerhSjfjDzjhu1PpHh_JgTCNIQzTyIe=w752-h897'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Siddharth Rakshe
            </Heading>
            <Text color={'gray.500'}>Frontend Developer</Text>
          </Stack>
          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.700')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
    </Container>

{/* Aman Deshpande  */}
  
<Container  margin="20px" py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://lh3.googleusercontent.com/fife/APg5EOZEZJrGXMEpRHofrO5aeQ6QzsP3xshAo4TFfjhjFOFTuKuLCkqMsQfrziza_of39G8g0v3UP-vaPZ3deH0vh9dMuGbuA0JHBTpGjPKqUUh9toMQ7mcg0TVm8pOf7ZGbFXYlJyb2KjSPiKx74Rgib8LDcN18xQ4GyowYxgRI-awt7TBU2PHXHzEkG8uEeYLJhVoqb7ANq6aDwuk8XAdUXeokatzRDz9bg9txe5_ebkSpI7Q5ODiXPDqx-OSnIA08MK80LldsKbuHp4vDGdeOYgKtP5A-OiNKjpJGGHq1t-nPmg8QVV5DZQ7V3__nOUZRnEp1B8j-sdn3n3yLZqIMrp82XNZciL5j6TZQm7xBY1uhtMLyiCv9CAxVwhg6cExmu_xdLaBx73SmE9vuVKVuTPnwwpadx_yHhFVDGt6FbxME0_MCEf9ct-8n9uM6NTpBiK09QW06U2mNiyilopz4Hgat1nPM78Rft9to9JZr5kILkW6rd-aM73WhAYrd3fSB7YUDsyxNGMkLnbMxpgCdDUvw7ei7U4tez7DO06SuCqsqfbILbazu2V_QavE2HLlarxqrnuAdKmP4B6mVf1_cZonlHdvlagbXgkVcgTBwCrg8Zm9NF8bKeCtNPrX7GYk25ND6CtmsTfBaeOXzqbWkuDUmCIn6deXCQPC1iQeBc52pAj4OlkGs-BD3_LXA1sRLGs_Aa83KwnpkrAdPV2g5ot9KvZQMQiO_U8MilorBkVoPBjVz6HThvs9PJMUCYFVsf0rvil7JUBysdmuxrCv75p7LoeTx5slh1W_xfvA1FlW7KQA_Y_3PCi9gUDebqVE_bsEJjZpqeAWOlowJ7YLXYeDP18FFtVCsqP8S81MDlSyOqLeb5xdvM3JcAKJ5NHK9ZFo_e6b0U63k2UDOv_w_qwgqSVnxax5FlqGS-r3E1ovQem9teIpdTVVMGqtD2G9CYo2s-29AZoyL-JizIumnPgIYvfX-4LmlsJMLQw26r5qj2XD95uIOedCVS-Dv_o2_HHC2ci30XiRr4k0HxCO_cX9SRjkkVUTjjGaJDhBHG_P3CstgCQ-08M8i9ngfN5cEJHNXwYDia3FHsWqV2xtU-Ku_yxtKZbdoz-Ri6o8thmt2YMD5kjX1p8RqDxb7uSKU13tIL2sgyERWxMPmxvgsaxLkPuu0SDcBqlthDJ3DpZyAuhWd2cNMb0JOeVUGu0NOhbcHkd0xVE0VRxpftJaz0_q8a3WSeHqKXk9-9cxP1hzO3ji3kek4P4DPUXoctMqL_ElL-z_y62EfqZoG5vfwjdkv9m8chmXnnnpL1AJIynpF0xAet0GaTzwGBTOHaa0uHPIYZj5Qk2vm8oOiyDjszUumWDTH1tYFZ-skFZVgbsqYprQIkIrAhsc1YL3jdPXurDwsimMYKTeDtjG2P97GLu5YDzBxL6aZ_xIdBKDAuGFMjIZYOZbrWQWvUsaGHGErm9O_G5iD2VjwMQBYOaVi69dsedbj=w1227-h897'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Aman Deshpande
            </Heading>
            <Text color={'gray.500'}>Frontend Developer</Text>
          </Stack>
          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.700')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
    </Container>


     {/*aarya   */ }

    <Container margin="20px" py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            "https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"

          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://lh3.googleusercontent.com/fife/APg5EOa3-YHOkzTA5N-IZe2bqCBY8cGnSsPsAkdqGbRGY_vf-ji6nusbcEu7yNqx1Rd7kfi8dyiZighF94tjEpKUmTCVTbFvYRPEoGLyVfTvzyuPUNrCVsmZNu6mlKP4GATlqTKebfqqjo-v_OoT9lQ6lUByvp5K8TCGuVjA57D-yQXYrb5VetvuAHFB030fK5KncLMPuYqxEODHSu3W0SK9_-gWMLw1WXihiWwcOl8EfV8KXdr8bD9irV3OEmr-KIA99dP8ZzjkgT9_YSIDm_LLS1Hri0Bu-NhcpQrxUotsQ9E8OyrPq-M9POB9sdX0b2jyHNYcjmjaFhADicIykWtZxM1W2vW1ofL3QjPIzhituZjJ4e_rhbePEcgNPdjqHnuOYPKcos2117IWCQlZaGK7D9qgluZWIC6Sis86wLr5cQEaJc2ykF2oqtl-2JKVAhAgpsDSvPKbOgE3mA5BlJ8OwLJOu0rJ1r-k_zxXDtehUnOe_oeN6WAU7yUfnCuHc-7K6GkViS6XZVCK4KNX5GglB5vPcWqEoag-3Ty8nhBb4U4kQNwTMRf506CPCtepBoIhc6qAL_Q4RbYcnzX48uZIHJmvqYHuVcux5Pfu6r_Mi-Q3IkfvxaXkJAjJvRmfn3fA7Pby9iUot8PjoGbL7giN9LQK-XB1HRMRRseXUCG7I933uEbqwxzUJ_0fmTvWrD5Wdp4jyiLYQsCJpbyPiwiHiOuTubI_-X6pGnxMh_TiBOMIkV0ZEjiOCFs6YJ338_jNBYKpS4FZsdGTU37D5ESGkF5BuCWcdA87O-4eyAcYvwE2K3sWpkS5pme3psVBpnvcRktav4Zrg66sd7nnUT2oUSd2YkOSKwaNmNPMVjE_zTUFh38o4Ue0oNcKQvgpEbvIKdhSf5hVOfHfvzSGkF5V8Uh4kMhYPt4KDdeLSx4YhZD6X4pMRvwlNsycrcyNiKx4F2Wg5kjwALynh3kbOL7FsBh7exopue34Pwv7jnzrKGxW8llXFecMmfXlCyph_Vf6-cJNST7uzpB0oFprtC_n_Km3zhQAkFK_s2mvrJR4rVQ6rsYhcHSC_7kAwmxpGFJZ38jy5vmKcTjssagJNN12ClyMkVQUC0tSz4UPyVF9bqfDalw_aebCPIC3B6WOS1LtsDfvoaQGCAIy7CclxST1sGn4HtLNDMDeyocVquW-Nz9TGx0zQ9QrroKlbqDbUmRzqMo0pbR0ekHXLEI9Eo4dI8k1CDxYCYF1QPq2vWdCMshgynes17vKN-bJjknzmmAeUDgJxVquzjX-TY7GrgIdGrgX1up87vI3InAhctyEN97KwKhWvaEc2pFa0h373ML7Nto20z6HdSxJ91dfaQ_-VsF8ti2CQtLqor7IKabTBFLZudONhKOH0wzH79xpMot7fqSNIjqpys8W9YGpcavCfcK0DT6f2riLPTWmgMoc8brtbDWBwB50AwwGTKl1xd_BqsvTjRnt9GjdGqxA6JYmPdtAzxFt=w1920-h897'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Aarya Gode 
            </Heading>
            <Text color={'gray.500'}>Full Stack Developer</Text>
          </Stack>
          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.700')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
    </Container>
          {/*varad  */ }
    <Container   margin="20px" py={6}>
      <Box
        maxW={'270px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'md'}
        overflow={'hidden'}>
        <Image
          h={'120px'}
          w={'full'}
          src={
            'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
          }
          objectFit={'cover'}
        />
        <Flex justify={'center'} mt={-12}>
          <Avatar
            size={'xl'}
            src={
              'https://lh3.googleusercontent.com/fife/APg5EOZOV3HKo6vtZARv1QCVEDPL_2R5LMIptFrohNPRvis9_euW9hvfIvE7RYjUSWgM4soYJMwKV-HFiXtWFkNnJNd-8EdoJpNDy-ztjme_VnnG-zoJVvQxDowP14vBcLDWgMIHMkZYgbjQ4-KGrv1wBlnviHmwYVuIUIIoztNbOue84qMP-V_QNOlkxfChiCHVf7JzeeTOPk510NtLD9WbxBazIB5jQyqq28jT49GF1GKF_zTGiYRLhVxBKfKaV1vmoVZaV7xNSj5bOrthm7hiZWRn9L5VH2njAXlEFEY5DwLHVNx7BSbX4yDj-hUWLL-VRQ3z0n3tFktF9rnEtyFzvghE5cPepk-KX8Xatxu4VA2PrQl60yC7pL4N5r1lfmRS8g40XgaTzl4XiFqUG2DzfokYxOjEJUtxLsvFiXRWHbm5s-86UM6Ez5xyoCjfHUAIWIzly-f5p98EKAk0r_jygtoR_QrvDZkb24yKk_XAVBv6ku9DLnBmnHKAbKXgKlFhJKec_lzkmUfnUf1HjFo4ShLLnEzgPyXnefYrqvy9JLCmugjmJR3MwL-L_zhNkmp2nVV5HfrdMyxkha9zWAlZVv7CVj14vIy8RkFLMN1deO0JX_g3RX2Dk37YzzIbp65V7W-19YMhhx8b2aOGVfdkoVJyAqhX2hxUjWp_t15csN4vQkL-_jy1W1uiom3uVZWOJFutpqAbQIyNkCkVS_vR6YH7lRXVvtSRuw0u9EmN8Wg800s-rZEEmwsYQRhexhuW30Q60v7yTSUvajOWhQuvCGQuo6W25AiKsxrdfEXk-qlF-zlXArWzCQgzttvMvHTcKqhWRgki0NzoBAKTAy6mSUCqpiVNVD0quUJsOaAKdnKsEOFoy5fUtP5cxp9NVfnUG48XRLVmRdWmaHQWIZ5Gf4Buy6_nHi8VAcGPPyN6OpEzWPJEDPUkl3nX547KOTa5C0PR5NINpcEuXnXu6EQOWhJkP0VgY8aJ15xvskzWYkJIQLmPD1SfW61iit7vIeewIIMEcluujrRw5rpkfrNgIiVR8J3jWtIElHSQyBjV2-fA191JKrc7_wdfSGsTTENS_RXxNZhnwqDl_L3oI2DmRvXeiu5Jmk712Kg02Zfcazv_lRGrHi1AXrOmnhEBfqPJ0MXjK_496n2P1zDnHPvPlqepAgAHKqN5-C0F-1midXt0xmN-LpnslKIDEqnE3Mq5AApU3jcyeqm_LpqRT_bno4gIAtH11u0kR_eDjHVGKXr3myhmc8UeUmWuFws6YUtdL87owWKj4vOJXwtFSUuS6VXaxq7TptF9h7Pm6tNPWHNhcjNuYnSnY-G8YL8Wbj7niHK6BArkiazzhf6n-JHLGtG0ZXJo-cUwpPlE5jQT1MCSBOcHP6mjq_Z_fOvntDWZR4LQLwj7Lx_zay9UV9zevPOLjlT-SoJ6N5RK7W5FbkV5RAxxNCgzIRpcBGJsWzsRV4a-lRNyY3-RWlTayClBG7GMDxsF=w1920-h897'
            }
            alt={'Author'}
            css={{
              border: '2px solid white',
            }}
          />
        </Flex>

        <Box p={6}>
          <Stack spacing={0} align={'center'} mb={5}>
            <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
              Varad Rajopadhya 
            </Heading>
            <Text color={'gray.500'}>Full Stack  Developer</Text>
          </Stack>
          
          <Button
            w={'full'}
            mt={8}
            bg={useColorModeValue('#151f21', 'gray.700')}
            color={'white'}
            rounded={'md'}
            _hover={{
              transform: 'translateY(-2px)',
              boxShadow: 'lg',
            }}>
            Follow
          </Button>
        </Box>
      </Box>
    </Container>
    </Flex>
    
    </>
  )
};


export default Team