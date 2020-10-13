using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace manilaxmisilks_api.Helpers
{
    public static class ImageHelper
    {
        public static List<string> CreateImages(Dictionary<string, string> imageBlobs, int productId)
        {
            List<string> fileNames = new List<string>();

            foreach (var item in imageBlobs)
            {
                var base64Blob = item.Value.Substring(item.Value.IndexOf(',') + 1);

                byte[] bytes = Convert.FromBase64String(base64Blob);

                const string fileExtn = ".jpeg";

                var filename = string.Concat(productId, '_', item.Key, fileExtn); 

                var computedPath = WebApiConfig.FileStorePath + "/" + filename;

                File.WriteAllBytes(computedPath, bytes);

                fileNames.Add(filename);
            }
            return fileNames;
        }

        public static void DeleteImages(List<string> productImages)
        {
            foreach (var image in productImages)
            {
                var fullPath = WebApiConfig.FileStorePath + "/" + image;

                File.Delete(fullPath);
            }
        }
    }
}