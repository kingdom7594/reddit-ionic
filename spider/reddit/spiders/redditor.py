# -*- coding: utf-8 -*-
import scrapy


class RedditorSpider(scrapy.Spider):
    name = 'redditor'
    allowed_domains = ['https://www.reddit.com/']
    start_urls = ['http://https://www.reddit.com//']

    def parse(self, response):
        pass
