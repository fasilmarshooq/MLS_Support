using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Web;

namespace manilaxmisilks_api.Helpers
{
    public static class AccessTokenHelper
    {
        public static string GetAccessToken()
        {
            DateTimeFormatInfo dfi = DateTimeFormatInfo.CurrentInfo;
            Calendar cal = dfi.Calendar;
            DateTime date = DateTime.Today;  //new DateTime(2020, 12, 01);
            var week = cal.GetWeekOfYear(date, dfi.CalendarWeekRule, dfi.FirstDayOfWeek).ToString().PadLeft(3, '0');
            var month = cal.GetMonth(date).ToString().PadLeft(2, '0');
            var year = cal.GetYear(date).ToString().Substring(2, 2);
            return string.Concat(year, "M", week, "L", month, "S");
        }

        public static bool ValidateAccessToken(string token)
        {
            var currentToken = GetAccessToken();

            return currentToken.Equals(token);
        }
    }
}