package com.healthcareIntelligence.myapp.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="PATIENT_DETAILS")
public class Patient {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "PATIENT_DETAILS")
    @SequenceGenerator(sequenceName = "PATIENT_DETAILS_PATIENT_ID_SEQ", allocationSize = 1, name = "PATIENT_DETAILS")
	@Column(name="PATIENT_ID")
	private Long patientID ;
	
	@Column(name="PATIENT_FNAME")
	private String firstName ;
	
	@Column(name="PATIENT_LNAME")
	private String lastName ;
	
	@Column(name="CONTACT_NO")
	private int contactNo;
	
	@Column(name="SEX")
	private String gender;
	
	@Column(name="PRESENT_ADDRESS")
	private String address;
	
	@Column(name="CITY")
	private String city;
	
	@Column(name="STATE")
	private String state;
	
	@Column(name="COUNTRY")
	private String country;
	
	@Column(name="PINCODE")
	private String pincode;
	
	@Column(name="CREATED_DATE")
	private Date createdDate;
	
	@Column(name="APPOINTMENT_DATE")
	private Date appointmentDate;
	
	@Column(name="APPOINTMENT_TIME")
	private Date appointmentTime;
	
	@Column(name="ISSUE")
	private String issue;
	
	@Column(name="ROOM_ID")
	private int roomID;
	
	@Column(name="BLOOD_GROUP_ID")
	private int bloodGroupID;
	
	@Column(name="MEDICINE_ID")
	private int medicineID;//later to be changed to JSON
	
	@Column(name="TEST_ID")
	private int testID;

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public int getContactNo() {
		return contactNo;
	}

	public void setContactNo(int contactNo) {
		this.contactNo = contactNo;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getPincode() {
		return pincode;
	}

	public void setPincode(String pincode) {
		this.pincode = pincode;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getAppointmentDate() {
		return appointmentDate;
	}

	public void setAppointmentDate(Date appointmentDate) {
		this.appointmentDate = appointmentDate;
	}

	public Date getAppointmentTime() {
		return appointmentTime;
	}

	public void setAppointmentTime(Date appointmentTime) {
		this.appointmentTime = appointmentTime;
	}

	public String getIssue() {
		return issue;
	}

	public void setIssue(String issue) {
		this.issue = issue;
	}

	public int getRoomID() {
		return roomID;
	}

	public void setRoomID(int roomID) {
		this.roomID = roomID;
	}

	public int getBloodGroupID() {
		return bloodGroupID;
	}

	public void setBloodGroupID(int bloodGroupID) {
		this.bloodGroupID = bloodGroupID;
	}

	public int getMedicineID() {
		return medicineID;
	}

	public void setMedicineID(int medicineID) {
		this.medicineID = medicineID;
	}

	public int getTestID() {
		return testID;
	}

	public void setTestID(int testID) {
		this.testID = testID;
	}

	public Long getPatientID() {
		return patientID;
	}

}
