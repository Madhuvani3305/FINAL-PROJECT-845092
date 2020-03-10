using System;
using System.Collections.Generic;
using System.Text;
using Emart.BuyerService.Controllers;
using Emart.BuyerService.Models;
using Emart.BuyerService.Repository;
using NUnit.Framework;

namespace Emart.Test
{
    [TestFixture]
     public class TestBuyerRepository
    {
        BuyerRepository _repo;
        [SetUp]
        public void setup()
        {
            _repo = new BuyerRepository(new EmartDBContext());
        }
        [Test]
        [Description("GetCart")]
        public void TestGetCart()
        {
            var result = _repo.GetCart(2);
            Assert.NotNull(result);
            Assert.Greater(result.Count, 1);
        }
        [Test]
        public void Testdeletefromcart()
        {
            _repo.deletefromcart(620);
            var result = _repo.GetCart(620);
            Assert.Null(result);
        }
    }
}
