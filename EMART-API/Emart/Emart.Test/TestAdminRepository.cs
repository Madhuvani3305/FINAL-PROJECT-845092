﻿using System;
using System.Collections.Generic;
using System.Text;
using Emart.AdminService.Controllers;
using Emart.AdminService.Models;
using Emart.AdminService.Repository;
using NUnit.Framework;
namespace Emart.Test
{
    [TestFixture]
    class TestAdminRepository
    {
        AdminRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new AdminRepository(new EmartDBContext());
        }
        [Test]
        [Description("get category")]
        public void TestAdditems()
        {
            _repo.AddCategory(new Category()
            {
                Cid = 9,
                Cname = "Teddyspoons",

                Cdetails = "spoons",
            });
            var result = _repo.getbyid(4);
            Assert.NotNull(result);

        }
        [Test]
        [Description("Add Subcategory")]
        public void TestAddsubcategory()
        {

            _repo.AddSubcategory(new Subcategory()
            {
                Cid = 9,
                Scid = 3,
                Scdetails = "gud",
                Sname = "Smallspoons",

            });
            var result = _repo.getby(3);
            Assert.NotNull(result);
        }
        [Test]
        public void TestGetbycategory()
        {
            var result = _repo.getbyid(9);
            Assert.IsNotNull(result);
        }
        [Test]
        public void TestGetbysubcategory()
        {
            var result = _repo.getby(3);
            Assert.IsNotNull(result);
        }
        [Test]
      
        [Description("Getcategorylist")]
        public void TestGetcategorylist()
        {
            var result = _repo.Getcategory();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 5);
        }

        [Test]

        [Description("Getgetsubcategorylist")]
        public void TestGetsubcategorylist()
        {
            var result = _repo.Getsubcategory();
            Assert.NotNull(result);
            Assert.Greater(result.Count, 5);
        }

    }
                
}
