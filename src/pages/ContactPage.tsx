import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Mail, MapPin, Phone, Clock, Send, MessageSquare, Building, Users, Calendar, Clock as ClockIcon, X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const [showAppointment, setShowAppointment] = useState(false);
  const [appointmentSubmitted, setAppointmentSubmitted] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<Date | null>(null);

  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: t('contact.phone.title'),
      description: t('contact.phone.description'),
      value: '+90 (212) 555 0123',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: t('contact.email.title'),
      description: t('contact.email.description'),
      value: 'info@tamendustri.com',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <MapPin className="w-8 h-8" />,
      title: t('contact.address.title'),
      description: t('contact.address.description'),
      value: 'İstanbul, Türkiye',
      gradient: 'from-purple-500 to-pink-500'
    }
  ];

  const contactForm = [
    { label: t('contact.form.name'), type: 'text', placeholder: t('contact.form.name_placeholder') },
    { label: t('contact.form.email'), type: 'email', placeholder: t('contact.form.email_placeholder') },
    { label: t('contact.form.company'), type: 'text', placeholder: t('contact.form.company_placeholder') },
    { label: t('contact.form.phone'), type: 'tel', placeholder: t('contact.form.phone_placeholder') }
  ];

  // Randevu saatleri
  const appointmentTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
    '16:00', '16:30', '17:00', '17:30'
  ];

  // Kapalı tarihler (örnek: tatiller, özel günler)
  const closedDates = [
    '2024-12-25', '2024-12-26', '2024-12-31', '2025-01-01', // Yılbaşı
    '2024-12-20', '2024-12-21', '2024-12-22', '2024-12-23', // Örnek kapalı günler
  ];

  // Kapalı saatler (örnek: öğle arası)
  const closedTimes = [
    '12:00', '12:30' // Öğle arası
  ];

  // Minimum tarih (bugünden itibaren)
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Takvim fonksiyonları
  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDay = firstDay.getDay();
    
    const days = [];
    
    // Önceki ayın günleri
    for (let i = startingDay - 1; i >= 0; i--) {
      const prevDate = new Date(year, month, -i);
      days.push({ date: prevDate, isCurrentMonth: false, isDisabled: true });
    }
    
    // Bu ayın günleri
    for (let i = 1; i <= daysInMonth; i++) {
      const currentDate = new Date(year, month, i);
      const today = new Date();
      const isPast = currentDate < new Date(today.getFullYear(), today.getMonth(), today.getDate());
      const isClosed = closedDates.includes(currentDate.toISOString().split('T')[0]);
      const isWeekend = currentDate.getDay() === 0 || currentDate.getDay() === 6; // Pazar veya Cumartesi
      
      days.push({
        date: currentDate,
        isCurrentMonth: true,
        isDisabled: isPast || isClosed || isWeekend
      });
    }
    
    // Sonraki ayın günleri
    const remainingDays = 42 - days.length; // 6 satır x 7 gün
    for (let i = 1; i <= remainingDays; i++) {
      const nextDate = new Date(year, month + 1, i);
      days.push({ date: nextDate, isCurrentMonth: false, isDisabled: true });
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('tr-TR', {
      year: 'numeric',
      month: 'long'
    });
  };

  const handleDateSelect = (date: Date) => {
    setSelectedDay(date);
    setSelectedDate(date.toISOString().split('T')[0]);
    setSelectedTime('');
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const isTimeAvailable = (time: string) => {
    if (!selectedDay) return false;
    const selectedDateStr = selectedDay.toISOString().split('T')[0];
    // Burada backend'den kontrol edilebilir
    return !closedTimes.includes(time);
  };

  // Randevu formu gönderimi
  const handleAppointmentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Burada mail gönderme işlemi yapılacak
    setAppointmentSubmitted(true);
    setTimeout(() => {
      setAppointmentSubmitted(false);
      setShowAppointment(false);
      setSelectedDate('');
      setSelectedTime('');
      setSelectedDay(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Header />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tam-blue to-tam-dark text-white py-32">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl text-white mb-6 leading-tight">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-20 bg-white rounded-t-3xl -mt-8 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('contact.info.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.info.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="group h-full gpu-accelerated">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-tam-blue/20 h-full flex flex-col optimized-transition">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0 hover-accelerated`}>
                    <div className="text-white group-hover:scale-105 transition-transform duration-250 ease-out">
                      {method.icon}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-tam-blue transition-colors duration-250">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-1 mb-4">
                      {method.description}
                    </p>
                    <p className="text-tam-blue font-semibold">
                      {method.value}
                    </p>
                  </div>
                  
                  {/* Hover Effect Line */}
                  <div className="mt-4 h-1 bg-gradient-to-r from-tam-blue to-tam-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-left rounded-full"></div>
                </div>
              </div>
            ))}
            
            {/* Randevu Kartı */}
            <div className="group h-full gpu-accelerated">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl border border-gray-100 hover:border-tam-blue/20 h-full flex flex-col optimized-transition">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg flex-shrink-0 hover-accelerated">
                  <div className="text-white group-hover:scale-105 transition-transform duration-250 ease-out">
                    <Calendar className="w-8 h-8" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-tam-blue transition-colors duration-250">
                    {t('contact.appointment.title')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed flex-1 mb-4">
                    {t('contact.appointment.description')}
                  </p>
                  <button
                    onClick={() => setShowAppointment(true)}
                    className="bg-gradient-to-r from-tam-blue to-tam-accent text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    {t('contact.appointment.button')}
                  </button>
                </div>
                
                {/* Hover Effect Line */}
                <div className="mt-4 h-1 bg-gradient-to-r from-tam-blue to-tam-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-250 ease-out origin-left rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50 rounded-t-3xl">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('contact.form.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.form.subtitle')}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactForm.map((field, index) => (
                  <div key={index}>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-tam-blue focus:border-transparent transition-all duration-200"
                    />
                  </div>
                ))}
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  rows={6}
                  placeholder={t('contact.form.message_placeholder')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-tam-blue focus:border-transparent transition-all duration-200 resize-none"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-tam-blue to-tam-accent text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {t('contact.form.send')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Office Section */}
      <section className="py-20 bg-white rounded-t-3xl">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              {t('contact.office.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('contact.office.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-tam-blue to-tam-accent rounded-xl flex items-center justify-center flex-shrink-0">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('contact.office.headquarters')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('contact.office.headquarters_address')}
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-tam-accent to-tam-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {t('contact.office.team')}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {t('contact.office.team_description')}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-2xl p-8 h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                <p className="text-lg font-medium">
                  {t('contact.office.map_placeholder')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      
      {/* Randevu Modal */}
      {showAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-6xl w-full p-8 relative">
            {/* Close Button */}
            <button
              onClick={() => setShowAppointment(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            
            {/* Modal Content */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {t('contact.appointment.modal.title')}
              </h3>
              <p className="text-gray-600">
                {t('contact.appointment.modal.subtitle')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* Takvim Bölümü */}
              <div className="xl:col-span-1 space-y-4">
                <h4 className="text-lg font-semibold text-gray-900">
                  {t('contact.appointment.calendar.title')}
                </h4>
                
                {/* Takvim Header */}
                <div className="flex items-center justify-between mb-4">
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h5 className="text-lg font-semibold text-gray-900">
                    {formatDate(currentMonth)}
                  </h5>
                  <button
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Takvim Grid */}
                <div className="grid grid-cols-7 gap-1">
                  {/* Gün başlıkları */}
                  {['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'].map((day) => (
                    <div key={day} className="text-center text-sm font-semibold text-gray-600 py-2">
                      {day}
                    </div>
                  ))}
                  
                  {/* Takvim günleri */}
                  {getDaysInMonth(currentMonth).map((day, index) => (
                    <button
                      key={index}
                      onClick={() => !day.isDisabled && handleDateSelect(day.date)}
                      disabled={day.isDisabled}
                      className={`
                        p-2 text-sm rounded-lg transition-all duration-200
                        ${day.isCurrentMonth 
                          ? day.isDisabled 
                            ? 'text-gray-300 cursor-not-allowed' 
                            : selectedDay && selectedDay.toDateString() === day.date.toDateString()
                              ? 'bg-tam-blue text-white'
                              : 'text-gray-900 hover:bg-gray-100'
                          : 'text-gray-300 cursor-not-allowed'
                        }
                      `}
                    >
                      {day.date.getDate()}
                    </button>
                  ))}
                </div>
                
                {/* Seçili tarih bilgisi */}
                {selectedDay && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-xl">
                    <p className="text-sm text-blue-800">
                      <strong>{t('contact.appointment.calendar.selected')}:</strong> {selectedDay.toLocaleDateString('tr-TR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                )}
              </div>
              
              {/* Saat Seçimi */}
              {selectedDay && (
                <div className="xl:col-span-1 space-y-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {t('contact.appointment.time.title')}
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {appointmentTimes.map((time) => (
                      <button
                        key={time}
                        onClick={() => handleTimeSelect(time)}
                        disabled={!isTimeAvailable(time)}
                        className={`
                          p-3 text-sm rounded-lg transition-all duration-200
                          ${selectedTime === time
                            ? 'bg-tam-blue text-white'
                            : isTimeAvailable(time)
                              ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                              : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                          }
                        `}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Form - Sağda */}
              {selectedDay && selectedTime && (
                <div className="xl:col-span-1 space-y-4">
                  <form onSubmit={handleAppointmentSubmit} className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {t('contact.appointment.form.title')}
                    </h4>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.appointment.form.name')}
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-tam-blue focus:border-transparent transition-all duration-200"
                        placeholder={t('contact.appointment.form.name_placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.appointment.form.email')}
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-tam-blue focus:border-transparent transition-all duration-200"
                        placeholder={t('contact.appointment.form.email_placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.appointment.form.phone')}
                      </label>
                      <input
                        type="tel"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-tam-blue focus:border-transparent transition-all duration-200"
                        placeholder={t('contact.appointment.form.phone_placeholder')}
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('contact.appointment.form.message')}
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-tam-blue focus:border-transparent transition-all duration-200 resize-none"
                        placeholder={t('contact.appointment.form.message_placeholder')}
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-tam-blue to-tam-accent text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                    >
                      {t('contact.appointment.form.submit')}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      
      {/* Success Message */}
      {appointmentSubmitted && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-8 text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {t('contact.appointment.success.title')}
            </h3>
            <p className="text-gray-600 mb-6">
              {t('contact.appointment.success.message')}
            </p>
            <button
              onClick={() => setAppointmentSubmitted(false)}
              className="bg-gradient-to-r from-tam-blue to-tam-accent text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              {t('contact.appointment.success.button')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPage; 