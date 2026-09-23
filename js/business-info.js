// מקור אמת יחיד לנתוני העסק — לעדכן כאן בלבד כשמשתנה
window.BUSINESS_INFO = {
  reviewCount: 116,
  rating: 4.8,
  ratingStars: "★★★★★"
};

document.addEventListener('DOMContentLoaded', function() {
  var info = window.BUSINESS_INFO;
  document.querySelectorAll('[data-review-count]').forEach(function(el) {
    el.textContent = el.getAttribute('data-review-count-format')
      ? el.getAttribute('data-review-count-format').replace('{n}', info.reviewCount)
      : info.reviewCount;
  });
  document.querySelectorAll('[data-rating]').forEach(function(el) {
    el.textContent = info.rating;
  });
});
