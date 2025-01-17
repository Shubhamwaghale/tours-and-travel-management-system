package com.app.service;

import java.util.List;

import com.app.pojo.Booking;

public interface BookingService {

	Booking BookPackage(int id, Booking booking,int userId);

	List<Booking> getMyBookings(int userId);

	void cancelBooking(int id);

}
