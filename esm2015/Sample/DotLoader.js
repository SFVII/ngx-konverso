/***********************************************************
 **  @project ngx-konverso                              **
 **  @file DotLoader                                         **
 **  @author Brice Daupiard <brice.daupiard@smartiiz.com>  **
 **  @Date 07/04/2021                                         **
 ***********************************************************/
export const DotLoaderTemplate = (color) => `<div class="loading-dots">
<div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  <div class="loading-dots--dot" style="background-color: ${color}"></div>
  </div>`;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRG90TG9hZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8va29udmVyc28vIiwic291cmNlcyI6WyJTYW1wbGUvRG90TG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs2REFLNkQ7QUFHN0QsTUFBTSxDQUFDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDOzBEQUNNLEtBQUs7NERBQ0gsS0FBSzs0REFDTCxLQUFLO1NBQ3hELENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAqKiAgQHByb2plY3Qgbmd4LWtvbnZlcnNvICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKipcbiAqKiAgQGZpbGUgRG90TG9hZGVyICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxuICoqICBAYXV0aG9yIEJyaWNlIERhdXBpYXJkIDxicmljZS5kYXVwaWFyZEBzbWFydGlpei5jb20+ICAqKlxuICoqICBARGF0ZSAwNy8wNC8yMDIxICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqKlxuICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG5cbmV4cG9ydCBjb25zdCBEb3RMb2FkZXJUZW1wbGF0ZSA9IChjb2xvcjogc3RyaW5nKSA9PiBgPGRpdiBjbGFzcz1cImxvYWRpbmctZG90c1wiPlxuPGRpdiBjbGFzcz1cImxvYWRpbmctZG90cy0tZG90XCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yfVwiPjwvZGl2PlxuICA8ZGl2IGNsYXNzPVwibG9hZGluZy1kb3RzLS1kb3RcIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICR7Y29sb3J9XCI+PC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJsb2FkaW5nLWRvdHMtLWRvdFwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvcn1cIj48L2Rpdj5cbiAgPC9kaXY+YDtcblxuIl19