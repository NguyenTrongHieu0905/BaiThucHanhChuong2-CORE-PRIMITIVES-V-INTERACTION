import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  ScrollView, 
  Image, 
  Pressable 
} from 'react-native';

// 1. Component Header
const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>SmartCampus</Text>
  </View>
);

// 2. Component ProfileSection (Chứa Image và Pressable thứ 1)
const ProfileSection = () => {
  return (
    <View style={styles.profileContainer}>
      <Pressable
        style={({ pressed }) => [
          styles.avatarWrapper,
          pressed && styles.avatarPressed
        ]}
        accessibilityRole="imagebutton"
        accessibilityLabel="Nhấn để xem hoặc đổi ảnh đại diện"
      >
        <Image
          source={{ uri: 'https://via.placeholder.com/80/D0E8F2/000000?text=SV' }}
          style={styles.avatarImage}
        />
      </Pressable>
      <View style={styles.profileInfo}>
        <Text style={styles.nameText}>Nguyễn Trọng Hiếu</Text>
        <Text style={styles.idText}>Mã SV: 22002985</Text>
      </View>
    </View>
  );
};

// 3. Component SearchField
const SearchField = ({ value, onChangeText }: { value: string, onChangeText: (text: string) => void }) => (
  <TextInput
    style={styles.searchInput}
    placeholder="Tìm kiếm thông tin..."
    value={value}
    onChangeText={onChangeText}
    accessibilityLabel="Ô nhập văn bản để tìm kiếm thông tin"
    placeholderTextColor="#888"
  />
);

// 4. Component StudentInfoCard
const StudentInfoCard = () => (
  <View style={styles.infoCard}>
    <Text style={styles.infoCardTitle}>Thông tin sinh viên</Text>
    <Text style={styles.infoCardText}>Email: 22002985.hieu@student.iuh.edu.vn</Text>
    <Text style={styles.infoCardText}>Lớp: DHKTPM18C</Text>
  </View>
);

// 5. Component ActionButton (Thêm prop onPress)
const ActionButton = ({ title, disabled, onPress }: { title: string, disabled?: boolean, onPress?: () => void }) => (
  <Pressable
    onPress={onPress}
    disabled={disabled}
    style={({ pressed }) => [
      styles.button,
      disabled ? styles.buttonDisabled : pressed ? styles.buttonPressed : styles.buttonNormal
    ]}
    accessibilityRole="button"
    accessibilityLabel={title}
    accessibilityState={{ disabled: disabled }}
  >
    <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
      {title}
    </Text>
  </Pressable>
);

// Màn hình chính (App)
export default function App() {
  const [searchText, setSearchText] = useState('');
  // Thêm state để quản lý việc hiển thị chữ "Đã lưu"
  const [isSaved, setIsSaved] = useState(false); 

  // Hàm xử lý khi nhấn nút LƯU HỒ SƠ
  const handleSaveProfile = () => {
    setIsSaved(true);
    
    // (Tuỳ chọn) Tự động ẩn thông báo "Đã lưu" sau 3 giây
    setTimeout(() => {
      setIsSaved(false);
    }, 3000);
  };

  return (
    <ScrollView 
      style={styles.container} 
      contentContainerStyle={styles.scrollContent}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.cardContainer}>
        <Header />
        
        <View style={styles.mainBody}>
          <ProfileSection />
          
          <SearchField 
            value={searchText} 
            onChangeText={setSearchText} 
          />
          
          <StudentInfoCard />
          
          <View style={styles.actionContainer}>
            <ActionButton 
              title="LƯU HỒ SƠ" 
              disabled={false} 
              onPress={handleSaveProfile} // Truyền sự kiện nhấn nút
            />
            
            {/* Hiển thị chữ "Đã lưu" nếu state isSaved là true */}
            {isSaved && (
              <Text style={styles.savedMessageText}>
                Đã lưu hồ sơ thành công!
              </Text>
            )}
          </View>
        </View>
      </View>
      <StatusBar style="auto" /> 
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  scrollContent: {
    padding: 20,
    justifyContent: 'center',
    minHeight: '100%',
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginTop: 40,
  },
  header: {
    backgroundColor: '#1976D2',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainBody: {
    padding: 20,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarWrapper: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#1976D2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  avatarPressed: {
    opacity: 0.6,
  },
  profileInfo: {
    marginLeft: 16,
  },
  nameText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  idText: {
    fontSize: 14,
    color: '#666',
  },
  searchInput: {
    height: 48, 
    borderWidth: 1,
    borderColor: '#D0D0D0',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#F9F9F9',
    marginBottom: 24,
  },
  infoCard: {
    backgroundColor: '#F0F8FF',
    borderRadius: 8,
    padding: 16,
    borderWidth: 1,
    borderColor: '#BBDEFB',
    marginBottom: 24,
  },
  infoCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 12,
  },
  infoCardText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 6,
  },
  actionContainer: {
    alignItems: 'center',
  },
  button: {
    width: '100%',
    height: 48, 
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  buttonNormal: {
    backgroundColor: '#1976D2',
  },
  buttonPressed: {
    backgroundColor: '#0D47A1', 
  },
  buttonDisabled: {
    backgroundColor: '#CFD8DC',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextDisabled: {
    color: '#90A4AE',
  },
  // Thêm style cho dòng chữ hiển thị
  savedMessageText: {
    color: '#4CAF50', // Màu xanh lá cây
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
  }
});