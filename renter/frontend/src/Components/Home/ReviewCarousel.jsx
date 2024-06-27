import React from "react";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { IoChevronBackSharp, IoChevronForwardSharp } from "react-icons/io5";
// And react-slick as our Carousel Lib
import Slider from "react-slick";


const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: false,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function ReviewCarousel() {

  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%",sm:"90%", md: "50%"});
  const side = useBreakpointValue({ base: "5%", md: "40px",lg:"10%"});

  // This list contains all the data for carousels
  const cards = [
    {
      name: "shailesh singade",
      text: "Marriage comes with a lot of unavoidable expenses in India and spending a big chunk of your savings on furniture and white goods could be a big challenge. RentoMojo not just took away all our worries but in fact went to the extent of spoiling us. Where I could have owned just some bare essentials after making a huge hole in my pocket or paid unnecessary EMIs, I could smartly own a lot of stuff which would have come much later on my list. Heartfelt thanks to  the whole Rentomojo team for making our renting experience completely hassle-free. It has been two great years and I am sure there are many more to come.",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Amit",
      text: "When I moved to Bangalore from Chennai, I went to multiple websites to get a bed until I found out about Rentomojo. I rented a bed and mattress, just to try it out. They delivered it within a day and set it up at my place without any hassle. Now I sleep so peacefully that I always end up being late for work :D",
      image:
        "data:image/jpeg;base64,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",
    },
    {
      name: "Dipawali",
      text: "I got to know about RentoMojo through a friend and looked up for AC on their website and finally rented one. The delivery guys installed the AC in 2 days. And with a such a low deposit and rent, I didn't have to spend a whole lot for my comfort. Thank you RentoMojo, for being so easy breezy on my pocket.",
      image:
        "https://images.pexels.com/photos/19899070/pexels-photo-19899070/free-photo-of-modern-living-room-with-windows-to-a-terrace.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Aniket",
      text: "Rentomojo was unbelievably helpful. Never thought that setting up a new place would be just few clicks away. The customer support staff was on their toes to help me. Anytime I need something for my house, Rentomojo has it. :)",
      image:
        "https://images.pexels.com/photos/19899092/pexels-photo-19899092/free-photo-of-rental-apartment-with-cushions-on-a-sofa.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Nikita",
      text: "The thought of renting the furniture had never occurred to me. When I saw Rentomojo's affordable range, I was super excited to try and it was really amazing. From service to product quality, everything was superb. I don’t have to carry the same furniture to every house I move to and can change the look of my home whenever I want 😬",
      image:
        "https://images.pexels.com/photos/5008399/pexels-photo-5008399.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      name: "Akash",
      text: "I was suddenly asked to move to Chennai from Bengaluru in couple of days. Everything was garbled for me and huge tension of getting apartment, buying furnitures, selling while going back to Bangalore. Thanks to RentoMojo for excellent budgeted plans. With few mouse clicks and nominal security deposit u are done ☺. No tension for delivery, Rentomojo is a furniture wish wizard. Also takes care of relocation made my life easy. Happy to be a customer for Rentomojo. It made my house a happy home!",
      image:
        "https://images.pexels.com/photos/19878518/pexels-photo-19878518/free-photo-of-living-room-with-pink-armchairs.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ];

  return (
    <Box
      position={"relative"}
      height={{ xl: "536px", md: "536px" , base:"434px" }}
      width={{base:"90%", md:"65%", sm:"90%", lg:"70%"}}
      m="auto"
      overflow={"hidden"}
    >
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="outline"
        borderRadius="full"
        bg="white"
        position="absolute"
        left={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <IoChevronBackSharp size="30px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="outline"
        borderRadius="full"
        bg="white"
        position="absolute"
        right={side}
        top={top}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <IoChevronForwardSharp size="30px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={{ lg: "536px", md: "536px" , base:"95%", sm:"90%"}}
            position="relative"
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            // border="1px solid black"
          >
            {/* This is the block you need to change, to customize the caption */}
            {/* xl : 556 , 536 base : 243.33  434 */}
            <Box
              height={{ xl: "536px", md: "536px" , base:"434px"}}
              bg="#f5f7fa"
              position="relative"
            //   border="1px solid red"
              borderRadius="20px"
              w={{ xl: "556px", md: "380px"}}
              m="auto"
              boxSizing="border-box"
              px="20px"
            >
              <Flex
                // border="1px solid green"
                // spacing={2}
                w={{ xl: "100%", md: "90%" , base:"80%" }}
                maxW={"lg"}
                position="absolute"
                top="16%"
                transform="translate(0, -50%)"
                alignItems="center"
              >
                <Box
                  h={{ base: "60px", md: "82px", xl: "82px" }}
                  w={{ base: "60px", md: "82px", xl: "82px" }}
                //   border="1px solid blue"
                  mr="16px"
                >
                  <Image
                    h="100%"
                    w="100%"
                    src={card.image}
                    alt={card.name}
                    borderRadius="full"
                  />
                </Box>
                <Text fontSize={{ lg: "18px" , base:"14px"}} color="#313131">
                  {card.name}
                </Text>
              </Flex>
              <Box
                // border="1px solid black"
                position="absolute"
                top="28%"
                padding={{sm:"0px", lg:"20px"}}
                w={{ xl: "92%", md: "90%" , base:"80%" }}
              >
                <Text fontSize={{base:"12px", md:"14px", lg:"16px"}} color={"#717171"} lineHeight={'1.5'}>
                  {card?.text}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
