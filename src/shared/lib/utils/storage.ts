import AsyncStorage from '@react-native-async-storage/async-storage';

const setStorageItem = async (key: string, value: any) => {
  return await AsyncStorage.setItem(key, value);
};

const getStorageItem = async (key: string) => {
  return await AsyncStorage.getItem(key);
};

const clearStorageItem = async (key: string) => {
  return await AsyncStorage.removeItem(key);
};

const clearAllStorage = async () => {
  return AsyncStorage.clear();
};
export {setStorageItem, getStorageItem, clearStorageItem, clearAllStorage};
