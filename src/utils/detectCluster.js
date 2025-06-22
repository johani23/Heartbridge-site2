function detectCluster(text) {
  // نموذج مبسط
  if (text.includes('خوف') || text.includes('قلق')) {
    return 'القلق/الخوف';
  } else if (text.includes('حب') || text.includes('اهتمام')) {
    return 'الارتباط العاطفي';
  } else if (text.includes('طفش') || text.includes('ملل')) {
    return 'البرود/الانسحاب';
  } else {
    return 'نمط غير محدد';
  }
}
