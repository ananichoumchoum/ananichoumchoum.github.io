import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Linking, Image, Modal} from 'react-native';
import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons';
import SvgComponent from './Zigzag';
import SvgComponent2 from './Zigzag2';
import SvgComponent3 from './Zigzag3';
import resumeImage from '../assets/resume.jpg';

const HomePage = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const container1Ref = useRef(null);
  const container2Ref = useRef(null);
  const container3Ref = useRef(null);
  const container4Ref = useRef(null);
  const toggleDropdown = () => {setShowDropdown(!showDropdown);};
  const [modalVisible, setModalVisible] = useState(false);
  const downloadImage = () => {
    const link = document.createElement('a');
    link.href = resumeImage;
    link.download = 'resume.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <View style={styles.container}>
        <View style={styles.navBar}>
            <Text style={styles.navBrand} onPress={() => container1Ref.current.scrollIntoView({ behavior: "smooth" })}>Portfolio</Text>
            <View style={styles.navLinks}>
            <Text style={styles.navLink} onPress={() => container2Ref.current.scrollIntoView({ behavior: "smooth" })}>About Me</Text>
            <Text style={styles.navLink} onPress={() => container3Ref.current.scrollIntoView({ behavior: "smooth" })}>Resume</Text>
            <Text style={styles.navLink} onPress={() => container4Ref.current.scrollIntoView({ behavior: "smooth" })}>Contact</Text>
                <Text style={styles.navLinkPlus}>+</Text>
                <View style={styles.dropdownContainer}>
                  <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
                    <AntDesign name={showDropdown ? "up" : "down"} size={12} color="#7d3482" />
                  </TouchableOpacity>
                  {showDropdown && (
                    <View style={styles.dropdown}>
                      <TouchableOpacity onPress={() => Linking.openURL('https://medium.com/@ananichoumchoum')}>
                        <Text style={styles.dropdownLink}>Blog</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
            </View>
        </View>
        <ScrollView contentContainerStyle={{ paddingBottom: 2 }}>
            <View style={styles.contentContainer}>
                <View style={styles.container1} ref={container1Ref}>
                <View style={styles.imageContainer}>
                  <Text style={styles.headerIntro}>ANNE SMITH</Text>
                  <Text style={styles.headerIntro2}>SOFTWARE DEVELOPER</Text>
                  <Image style={styles.imageIntro} source={require('../assets/portrait.png')} />
                </View>
                </View>
                <View style={styles.svgView}>  
                <SvgComponent style={{marginTop: -90, backgroundColor: '#'}}></SvgComponent>
                </View>
                <View style={styles.container2} ref={container2Ref}>
                    <View style={styles.rightContainer}>
                     <Image style={styles.imageMountain} source={require('../assets/mountains3.jpeg')} />
                     <Text style={styles.header}>About Me</Text>
                     <Text style={styles.text}>{"\n"}As an Information System Security graduate with expertise in software development, I am passionate about the world of web and mobile application development. I have a deep appreciation for the role of research in understanding client's needs and requirements, and I approach each project with the goal of becoming intimately familiar with the subject matter. This allows me to determine the most effective methods for addressing each client's unique challenges and delivering the best possible results.</Text>
                    </View>
                  <View style={styles.leftContainer}>
                    <View style={styles.leftColumn}> 
                      <Text style={styles.header}>{'\n'}</Text>
                      <Text style={styles.header}>.Research</Text>
                      <Text style={styles.text}>{'\n'}By deeply understanding the client's subject matter to deliver tailored solutions that not only address immediate challenges but also create lasting value for the client in the long term.</Text>
                      <View>
                       <Image style={styles.image1} source={require('../assets/research.png')} />
                      </View>
                    </View>
                    <View>
                      <Image style={styles.image} source={require('../assets/verticalLine.png')} />
                    </View>
                    <View style={styles.leftColumn}> 
                      <Text style={styles.header}>{'\n'}</Text>
                      <Text style={styles.header}>.Design</Text>
                      <Text style={styles.text}>{'\n'}Design is more than just looks. It involves market research, technical research, concept design, and prototyping, making it a comprehensive process.</Text>
                      <View>
                       <Image style={styles.image2} source={require('../assets/design.png')} />
                      </View>
                    </View>
                    <View>
                      <Image style={styles.image} source={require('../assets/verticalLine.png')} />
                    </View>
                    <View style={styles.leftColumn}> 
                      <Text style={styles.header}>{'\n'}</Text>
                      <Text style={styles.header}>.Develop</Text>
                      <Text style={styles.text}>{'\n'}Transforming research and design findings into real-world products and solutions is my passion. As an engineer, I use my expertise to bring these designs to life, creating tangible results that meet and exceed customer expectations.</Text>
                      <View>
                       <Image style={styles.image3} source={require('../assets/develop.png')} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.container3} ref={container3Ref}>
                  <View style={styles.svgView}>  
                    <SvgComponent3 style={{backgroundColor: 'white'}}></SvgComponent3>
                  </View>
                  <Text style={styles.textResume}>Resume:</Text>
                  <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image style={styles.imageModal} source={require('../assets/resume.jpg')} />
                  </TouchableOpacity>
                  <Modal
                    animationType="slide"
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                  >
                    <View style={styles.modalContainer}>
                      <Image style={styles.modalImage} source={require('../assets/resume.jpg')} />
                      <View style={styles.buttonsContainer}>
                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                          <Text style={styles.closeButton}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={downloadImage}>
                          <Text style={styles.downloadButton}>Download</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </Modal>
                  <View style={styles.innerContainer}>
                    <Image style={[styles.imagePort, { marginRight: 10 }]} source={require('../assets/ios.PNG')} />
                    <Image style={[styles.imagePort, { marginRight: 10 }]} source={require('../assets/ios6.PNG')} />
                    <Image style={[styles.imagePort, { marginRight: 10 }]} source={require('../assets/ios2.PNG')} />
                    <Image style={[styles.imagePort, { marginRight: 10 }]} source={require('../assets/ios3.PNG')} />
                    <Image style={[styles.imagePort, { marginRight: 10 }]} source={require('../assets/ios5.PNG')} />
                    <Image style={[styles.imagePort, { marginRight: 10 }]} source={require('../assets/ios4.PNG')} />
                  </View>
                </View>
                <View style={styles.svgView}>  
                <SvgComponent2 style={{marginTop: -90, backgroundColor: '#E2E2E2'}}></SvgComponent2>
                </View>
                <View style={styles.container4} ref={container4Ref}>
                  <View style={[styles.contactBox, { flex: 1 }]}>
                    <Text style={styles.contactTitle}>Contact Information</Text>
                    <Image style={styles.imageContact} source={require('../assets/horiz.png')} />
                    <View style={styles.contactInfo}>
                      <Text style={styles.contactText}>{'\n'}{'\n'}{'\n'}{'\n'}Email: la.annesmith@gmail.com</Text>
                      <View style={styles.share}>
                        <Text style={styles.shareText}>    Share:          </Text>
                        <View style={styles.shareLinks}>
                        <TouchableOpacity style={styles.shareLink} onPress={() => Linking.openURL('https://www.linkedin.com/in/anne--smith/')}>
                          <Text>{'\n'}</Text>
                          <FontAwesome name="linkedin" style={styles.shareIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareLink} onPress={() => Linking.openURL('https://www.instagram.com/ananichoumchoum')}>
                          <Text>{'\n'}</Text>
                          <FontAwesome name="instagram" style={styles.shareIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.shareLink} onPress={() => Linking.openURL('https://github.com/ananichoumchoum')}>
                          <Text>{'\n'}</Text>
                          <FontAwesome name="github" style={styles.shareIcon} />
                        </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View style={styles.imagesContainer}>
                    <Image style={[styles.imageRound, { marginRight: 50 }]} source={require('../assets/image1.jpg')} />
                    <Image style={[styles.imageRound, { marginRight: 50 }]} source={require('../assets/image2.jpg')} />
                    <Image style={[styles.imageRound, { marginRight: 50 }]} source={require('../assets/image3.jpg')} />
                    <Image style={[styles.imageRound, { marginRight: 50 }]} source={require('../assets/image4.jpg')} />
                    <Image style={[styles.imageRound, { marginRight: 50 }]} source={require('../assets/image5.jpg')} />
                    <Image style={[styles.imageRound, { marginRight: 50 }]} source={require('../assets/image6.jpg')} />
                  </View>
                  <TouchableOpacity style={styles.arrow} onPress={() => container1Ref.current.scrollIntoView({ behavior: "smooth" })}>
                      <FontAwesome name="arrow-up" style={styles.arrowIcon} />
                  </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  contentContainer: {
    height: 2450,
    zIndex: -1,
  },
  container1: {
    flex: 1,
    backgroundColor: '#202020',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    margin:20,
    justifyContent: 'center',
  },
  headerIntro: {
    fontFamily: 'Helvetica',
    color: '#fff',
    fontSize: 48,
    textShadowColor: 'rgba(255, 255, 255, 0.6)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
    marginLeft:220,
    padding:-10,
  },
  headerIntro2: {
    fontFamily: 'Helvetica',
    color: '#fff',
    fontSize: 18,
    marginBottom:100,
    marginLeft:220,
    padding:-10,
  },
  imageIntro: {
    right:200,
    width: 650,
    height: 500,
    marginRight:120,
    position: 'absolute',
  },
  container2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
    flexDirection: 'row'
  },
  svgView:{
    marginTop: -90,
    zIndex: 999,
    backgroundColor: '#FFFFFF',
  },
  image: {
    width: 84,
    height: 204,
    resizeMode: 'contain',
  },
  image1: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
    marginTop:20,
  },
  image2: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
    marginTop:30,
  },
  image3: {
    width: 100,
    height: 150,
    resizeMode: 'contain',
  },
  imageMountain: {
    width: 680,
    height: 264,
    marginTop: -125,
    marginLeft: -20,
    marginRight: -10,
    resizeMode: 'contain',
  },
  leftContainer: {
    flex: 2,
    alignItems: 'flex-start',
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
    marginTop: 60,
  },
  leftColumn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    padding: 20,
    
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 60,
  },
  container3: {
    flex: 1,
    backgroundColor: '#E2E2E2',
    position: 'relative',
    marginTop:-10,
  },
  textResume:{
    fontWeight:'bold',
    marginLeft:50,
    padding:10,
    marginTop:20,
  },
  downloadButton: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '20%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  imageModal: {
    width: 320,
    height: 450,
    marginLeft:70,
  }, 
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  modalImage: {
    width: '30%',
    height: '92%',
  },
  closeButton: {
    color: 'white',
    fontSize: 20,
    marginTop: 10,
  },
  innerContainer: {
    width: 1090,
    height: 440,  
    flexDirection: 'row',
    backgroundColor: '#E2E2E2',
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    borderRadius: 10,
    right: 10,
    top: 20,
  },
  imagePort: {
    width: 160,
    height: 350,
    resizeMode: 'contain',
    marginTop:40,
    marginLeft:11,
    borderRadius:10,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 35,
    shadowColor: 'grey',
  },
  container4: {
    flex: 1,
    backgroundColor: '#202020',
    alignItems: 'flex-start',
    padding: 20,
    flexDirection:"column"
  },
  imageContact: {
    width:250,
    height: 200,
    marginTop:-60,
    marginLeft:30 ,
    resizeMode: 'contain',
  },
  contactBox: {
    backgroundColor: '#F3F2F2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.4,
    shadowRadius: 10,
    elevation: 5,
    padding: 20,
    marginLeft: 310,
    marginTop:40,
    marginBottom:70,
  },
  contactTitle: {
    fontFamily: 'Helvetica',
    color: '#692c6d',
    fontSize: 34,
    fontWeight: 'bold',
    marginTop:10,
  },
  contactInfo: {
    flexDirection: 'column',
  },
  contactText: {
    fontFamily: 'Helvetica',
    color: '#202020',
    fontSize: 18,
    marginRight: 20,
    marginTop:-150,
    padding:20,
  },
  share: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  shareText: {
    fontFamily: 'Helvetica',
    color: '#202020',
    fontSize: 18,
    marginRight: 10,
  },
  shareLinks: {
    flexDirection: 'row',
  },
  shareLink: {
    marginRight: 10,
    marginBottom:40,
  },
  shareIcon: {
    fontFamily: 'FontAwesome',
    color: '#202020',
    fontSize: 24,
  },
  header:{
    fontFamily: 'Helvetica',
    color: '#692c6d',
    fontSize: 28,
    padding:10,
  },
  text:{
    fontFamily: 'Helvetica',
    fontSize: 16,
  },
  navBar: {
    backgroundColor: '#202020',
    flexDirection: 'row',
    justifyContent: 'space-between',
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    alignItems: 'center',
    elevation: 5, 
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingLeft: 200,
    zIndex: 1,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
  },
  navBrand: {
    fontFamily: 'Helvetica',
    color: '#692c6d',
    fontSize: 28,
    flex: 1,
    paddingRight: 100,
  },
  navLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 10,
    flex: 1,
  },
  navLink: {
    fontFamily: 'Helvetica',
    color: '#692c6d',
    fontSize: 20,
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
  },
  navLinkPlus: {
    fontFamily: 'Space Mono',
    color: '#692c6d',
    fontSize: 22,
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 5,
  },
  dropdown: {
    position: "absolute",
    top: "100%",
    left: 0,
    backgroundColor: "#202020",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    elevation: 5,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
    zIndex: 1,
  },
  dropdownLink: {
    fontSize: 16,
    color: "#7d3482",
    marginBottom: 10,
  },
  dropdownContainer: {
    position: "relative",
    backgroundColor: "#202020",
  },
  imagesContainer: {
    alignItems: 'center',
    padding:40,
    flexDirection: 'row',
    marginLeft:50,

  },
  imageRound: {
    width: 150,
    height: 150,
    borderRadius: 150 / 2, // make the image round
    marginLeft: 20,
  },
  arrow: {
    position: 'absolute',
    right: 20,
    backgroundColor: '#692c6d',
    borderRadius: 50,
    padding: 10,
    marginTop: 20,
  },
  arrowIcon: {
    color: '#491d48',
    fontSize: 24,
  },
});


