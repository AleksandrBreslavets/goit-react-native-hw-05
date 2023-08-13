import { Keyboard, StyleSheet, TouchableOpacity, View } from "react-native"
import { Platform } from "react-native"
import { KeyboardAvoidingView } from "react-native"
import { TouchableWithoutFeedback } from "react-native"
import { Text } from "react-native"
import { globalStyles } from "../../styles/globalStyles"
import { useState } from "react"
import { CameraIcon, MapPinIcon, TrashIcon } from "../../../assets/svgIcons/icons"
import { TextInput } from "react-native-gesture-handler"

export const CreatePostsScreen = () => {
    const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{ flex: 1 }}>
                <View style={[globalStyles.container, styles.container,
                {
                    paddingBottom: isKeyboardOpen ? 50 : 34,
                    display: 'flex',
                    justifyContent:'space-between'
                }
                ]}>
                    <View>
                        <View style={styles.imgContainer}>
                            <TouchableOpacity style={styles.addPhotoBtn}>
                                <CameraIcon fill="#bdbdbd" />
                            </TouchableOpacity>
                        </View>
                        <Text style={[styles.text, { marginBottom: 32 }]}>Завантажте фото</Text>
                        <View>
                            <TextInput
                                style={styles.inputName}
                                placeholder="Назва..."
                                placeholderTextColor="#bdbdbd"
                                onFocus={() => setIsKeyboardOpen(true)}
                                onBlur={() => setIsKeyboardOpen(false)}
                            />
                            <View style={{ marginTop: 16, marginBottom: 32 }}>
                                <MapPinIcon style={{ position: 'absolute', top: 13 }} />
                                <TextInput
                                    style={styles.inputLocation}
                                    placeholder="Місцевість..."
                                    placeholderTextColor="#bdbdbd"
                                    onFocus={() => setIsKeyboardOpen(true)}
                                    onBlur={() => setIsKeyboardOpen(false)}
                                />
                            </View>
                        </View>
                        <TouchableOpacity style={[globalStyles.button, globalStyles.disabledBtn]}>
                            <Text style={[globalStyles.commonTextStyles, globalStyles.disabledBtnValue]}>Опубліковати</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                        <TouchableOpacity style={styles.trashContainer}>
                            <TrashIcon />
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
            
}

const styles = StyleSheet.create({
    container: {
        paddingTop:32,
        paddingLeft:16,
        paddingRight: 16,
    },
    imgContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        width: "100%",
        height: 240,
        backgroundColor: "#f6f6f6",
        borderRadius: 8,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor:'#e8e8e8'
    },
    addPhotoBtn: {
        display:'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        backgroundColor: '#fff',
        borderRadius:30,
    },
    text: {
        fontFamily: "Roboto-Regular",
        fontSize: 16,
        lineHeight: 18.75,
        color:"#bdbdbd"
    },
    inputName: {
        width: "100%",
        height: 50,
        fontFamily: 'Roboto-Medium',
        fontSize: 16,
        lineHeight: 18.75,
        color:'#212',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: "#e8e8e8",
    },
    inputLocation: {
        width: "100%",
        height: 50,
        fontFamily: 'Roboto-Regular',
        paddingLeft:28,
        fontSize: 16,
        lineHeight: 18.75,
        color:'#212',
        borderBottomWidth: 1,
        borderStyle: 'solid',
        borderColor: "#e8e8e8",
    },
    trashContainer: {
        display: "flex",
        justifyContent:'center',
        alignItems: "center",
        width: 70, 
        height: 40,
        borderRadius: 20,
        backgroundColor:"#f6f6f6"
    }
});